import { Component, inject } from '@angular/core';
import { BrowserNotificationService } from '../../services/browser-notification.service';
import { RideHistoryService } from '../../services/ride-history.service';
import { catchError, of, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Ride, VehicleType } from '../../models/models.interface';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfirmRideService } from '../../services/confirm-ride.service';

@Component({
  selector: 'app-ride-history',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ride-history.component.html',
  styleUrl: './ride-history.component.css'
})
export class RideHistoryComponent {
  private _browserNotification = inject(BrowserNotificationService);
  private _rideHistory = inject(RideHistoryService);
  private _toster = inject(ToastrService);
  private _fb = inject(FormBuilder);
  private _confirmRideService = inject(ConfirmRideService)


  private title = 'Browser Push Notifications!'

  RidesFetched: Ride[] = [];
  rideHistory!: FormGroup;
  fetchedVehicleTypes: Array<VehicleType> = [];



  ngOnInit() {

    this.rideHistory = this._fb.group({
      searchTerm: [''],
      rideStatus: [Number],
      vechicleType: [''],
      date: ['']
    });
    this._browserNotification.requestPermission();
    let details = {
      // limit: this.limit,
      // page: this.pageNumber,
      // sort: 'none',
      date: this.rideHistory.get('date')?.value,
      rideStatus: null,
      searchTerm: '',
      vechicleType: this.rideHistory.get('vechicleType')?.value
    }
    this.fetchRides(details);
    this.fetcheTypes();

  }

  fetchRides(details: object) {
    this._rideHistory.fetchRides(details).pipe(
      catchError((e) => {
        console.log('res', e.error.message);
        if (e.status === 404 && e.error.message === 'Currently No rides are available') {
          this._toster.error('No History found', 'Error')
        }
        return throwError(e)
      }),
      tap((res) => {
        console.log('res tap', res);
        if (res.message === 'Rides Fetched Successfully') {
          this.RidesFetched = res.rides
        }

      })
    ).subscribe()
  }


  searchRides(val: string) {
    let details = {
      // limit: this.limit,
      // page: this.pageNumber,
      // sort: 'none',
      date: this.rideHistory.get('date')?.value,
      rideStatus: parseInt(this.rideHistory.get('rideStatus')?.value),
      searchTerm: val,
      vechicleType: this.rideHistory.get('vechicleType')?.value
    }
    this.fetchRides(details);

  }
  ClearFilter() {
    let formValues = this.rideHistory.value
    if (!Object.values(formValues).some(value => value !== '')) {
      this._toster.info('There is nothing to clear', 'Info');
      return;
    }
    this.rideHistory.reset();
    let details = {
      date: this.rideHistory.get('date')?.value,
      rideStatus: parseInt(this.rideHistory.get('rideStatus')?.value),
      searchTerm: this.rideHistory.get('searchTerm')?.value ,
      vechicleType: this.rideHistory.get('vechicleType')?.value
    }
    this.fetchRides(details)
  }

  fetcheTypes() {
    this._confirmRideService.getVehicleTypes().pipe(
      catchError((error) => {
        this._toster.error('Error while fetching the vehicle types', 'Error');
        return of(error)
      })
    ).subscribe({
      next: (res) => {
        this.fetchedVehicleTypes = res.TypesArray;
        console.log(this.fetchedVehicleTypes);
      }
    })
  }
}
