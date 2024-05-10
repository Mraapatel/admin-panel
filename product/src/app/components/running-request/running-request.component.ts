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
    this._socketIoService.listen('assignedRideWithDriver').subscribe({
      next: (res: assignedRidesWithDriver) => {
        console.log(res);
        this.runningRequests.push(res);
      }
    })
    // console.log('listning to the incoming rides');

    // this._runningRequest.listenToIncomingRides().pipe(
    //   catchError((error) => {
    //     this._toster.error('Error fetching new Ride', 'Error');
    //     return of(error)
    //   })
    // ).subscribe({
    //   next: (res: assignedRidesWithDriver) => {
    //     this.runningRequests.push(res);
    //     console.log('this.runningRequests.push(res)', this.runningRequests);
    //   }
    // })
    // this._socketIoService.listen('assignedRideWithDriver').pipe(
    //   catchError((error) => {
    //     this._toster.error('Error getting the Arrived Requests');
    //     return of(error)
    //   })
    // ).subscribe({
    //   next: (res: assignedRidesWithDriver) => {
    //     this.runningRequests.push(res)
    //     console.log(this.runningRequests);
    //   }
    // })
  }


}
