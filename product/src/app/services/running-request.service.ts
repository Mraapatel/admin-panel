import { Injectable, inject } from '@angular/core';
import { SocketIoService } from './socket-io.service';
import { Observable, Subscriber, catchError, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { assignedRidesWithDriver } from '../models/models.interface';

@Injectable({
  providedIn: 'root'
})
export class RunningRequestService {

  private _socketIoService = inject(SocketIoService);
  private _toster = inject(ToastrService);

  currentRunningRequests!: assignedRidesWithDriver


  constructor() {
    // this.listenToIncomingRides();
  }

  listenToIncomingRides(): Observable<assignedRidesWithDriver> {
    console.warn('listenToIncomingRides');
    // this._socketIoService.listen('assignedRideWithDriver').pipe(
    //   catchError((error) => {
    //     this._toster.error('Error getting the Arrived Requests');
    //     return of(error)
    //   })
    // ).subscribe({
    //   next: (res: assignedRidesWithDriver) => {
    //     this.currentRunningRequests = res
    //     console.log(this.currentRunningRequests);
    //   }
    // })
    // return new Observable((Subscriber) => {
    //   Subscriber.next(this.currentRunningRequests)
    // })
    return this._socketIoService.listen('assignedRideWithDriver').pipe(
      catchError((error) => {
        this._toster.error('Error getting the Arrived Requests');
        return of(error)
      }),
      tap((res: assignedRidesWithDriver) => {
        this.currentRunningRequests = res;
        console.log(this.currentRunningRequests);
      })
    );

  }
}   
