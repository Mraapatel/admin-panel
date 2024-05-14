import { Component, inject } from '@angular/core';
import { SocketIoService } from '../../services/socket-io.service';
import { catchError, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Ride, assignedRidesWithDriver } from '../../models/models.interface';
import { RunningRequestService } from '../../services/running-request.service';

@Component({
  selector: 'app-running-request',
  standalone: true,
  imports: [],
  templateUrl: './running-request.component.html',
  styleUrl: './running-request.component.css'
})
export class RunningRequestComponent {

  private _socketIoService = inject(SocketIoService);
  private _toster = inject(ToastrService);
  private _runningRequestService = inject(RunningRequestService);

  runningRequests: Array<assignedRidesWithDriver> = [];

  ngOnInit() {
    let data = {
      status: 0
    }
    // this._socketIoService.emitNewEvent('getTheRunningRequests', data)
    //----------------------------------------------allAssignedRidesWithDrivers-----------------------------------------//
    this._runningRequestService.getAllRunningRequest(data).pipe(
      catchError((error) => {
        this._toster.error('Error while fetching the all running requests', 'Error');
        return of(error)
      })
    ).subscribe({
      next: (res: { Requests: assignedRidesWithDriver[], message: string }) => {
        this.runningRequests.unshift(...res.Requests);
        console.log(this.runningRequests);
      }
    })
    // this._socketIoService.listen('allAssignedRidesWithDrivers').subscribe({
    //   next: (res: assignedRidesWithDriver[]) => {
    //     this.runningRequests.unshift(...res)
    //     console.log(this.runningRequests);
    //   }
    // });

    //----------------------------------------------assignedRideWithDriver-----------------------------------------//
    this._socketIoService.listen('assignedRideWithDriver').pipe(
      catchError((error) => {
        this._toster.error('Error getting the Arrived Requests');
        return of(error)
      })
    ).subscribe({
      next: (res: assignedRidesWithDriver) => {
        console.log(res);
        this.runningRequests.push(res);
      }
    })

    this.listninRremoveRideFormList();
    this.listningRejectedRide()
  }


  listninRremoveRideFormList() {
    this._socketIoService.listen('acceptedRideWithDriver').pipe(
      catchError((error) => {
        this._toster.error('Error getting the acceptedRideWithDriver', 'Error');
        return of(error)
      })).subscribe({
        next: (res: assignedRidesWithDriver) => {
          let index = this.runningRequests.findIndex((r) => r._id === res._id)
          console.log(res);
          this.runningRequests.splice(index, 1)
        }
      })
  }

  listningRejectedRide() {
    this._socketIoService.listen('rejectedRideByDriver').pipe(
      catchError((error) => {
        this._toster.error('Error getting the acceptedRideWithDriver', 'Error');
        return of(error)
      })).subscribe({
        next: (res: Ride) => {
          let index = this.runningRequests.findIndex((r) => r._id === res._id)
          console.log(res);
          this.runningRequests.splice(index, 1)
        }
      })
  }

  driverAcceptedRide(rideId: string) {
    // this._socketIoService.emitNewEvent('driverAccecptedRideRequest', { rideId: rideId });
    this._runningRequestService.driverAcceptedRequest(rideId).pipe(
      catchError((error) => {
        this._toster.error('Error confirming the ride', 'Error');
        return of(error)
      })
    ).subscribe()

  }

  driverRejectedRide(rideId: string, driverId: string) {
    console.log('driverRejectedRide called');
    
    let data = {
      rideId: rideId,
      driverId: driverId
    }
    this._runningRequestService.driverRejectedRequest(data).pipe(
      catchError((error) => {
        this._toster.error('Some Error Occured while rejecting the request', 'Error');
        return of(error)
      })
    ).subscribe()
  }

}
