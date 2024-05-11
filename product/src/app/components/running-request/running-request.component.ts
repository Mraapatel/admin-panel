import { Component, inject } from '@angular/core';
import { SocketIoService } from '../../services/socket-io.service';
import { catchError, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { assignedRidesWithDriver } from '../../models/models.interface';
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
  private _runningRequest = inject(RunningRequestService);

  runningRequests: Array<assignedRidesWithDriver> = [];

  ngOnInit() {
    let data = {
      rideId: '',
      driverId: '',
      rideStatus: 1
    }

    this._socketIoService.emitNewEvent('getTheRunningRequests', data)
    console.log('sent event');
    this._socketIoService.listen('allAssignedRidesWithDrivers').subscribe({
      next: (res: assignedRidesWithDriver[]) => {
        // this.runningRequests = res
        this.runningRequests.unshift(...res)
        console.log(this.runningRequests);
      }
    });


    // this._runningRequest.listenToIncomingRides().pipe(
    //   catchError((error) => {
    //     this._toster.error('Error fetching new Ride', 'Error');
    //     return of(error)
    //   })
    // ).subscribe({
    //   next: (res: assignedRidesWithDriver) => {
    //     if (res) {
    //       this.runningRequests.push(res)
    //       console.log('this.runningRequestSs.push(res)', this.runningRequests);
    //     }
    //     console.log('this.runningRequestSs.push(res)', this.runningRequests);
    //   }
    // })
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

  }

  driverAcceptedRide(rideId: string) {

    this._socketIoService.emitNewEvent('driverAccecptedRideRequest', { rideId: rideId });

  }

}
