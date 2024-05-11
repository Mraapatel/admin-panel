import { Component, inject } from '@angular/core';
import { SocketIoService } from '../../services/socket-io.service';
import { ActiveDriver, Ride, VehicleType, assignedRidesWithDriver, singleUser } from '../../models/models.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfirmRideService } from '../../services/confirm-ride.service';
import { catchError, findIndex, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RunningRequestService } from '../../services/running-request.service';

@Component({
  selector: 'app-confirm-ride',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './confirm-ride.component.html',
  styleUrl: './confirm-ride.component.css'
})
export class ConfirmRideComponent {
  private _socketIoService = inject(SocketIoService);
  private _fb = inject(FormBuilder);
  private _confirmRideService = inject(ConfirmRideService);
  private _toster = inject(ToastrService);
  private _runningRequestService = inject(RunningRequestService);

  pageNumber: number = 1;
  totalRides!: number;
  limit: number = 3;
  sort: string = 'none';
  searchTerm: string = ''
  RidesFetched!: Array<Ride>;
  confirmRideForm!: FormGroup;
  fetchedVehicleTypes: Array<VehicleType> = [];
  selectedRide!: Ride;
  ActiveDrivers: ActiveDriver[] = [];
  RidesUser!: singleUser;
  selectedDriver!: ActiveDriver;
  returnedRideInfo!: assignedRidesWithDriver

  ngOnInit() {
    this._runningRequestService.listenToIncomingRides().subscribe({
      next: (res: assignedRidesWithDriver) => {
        this.returnedRideInfo = res
        let index = this.RidesFetched.findIndex((r) => r._id === this.returnedRideInfo._id)
        this.RidesFetched[index] = this.returnedRideInfo
        console.log('this.RidesFetched[index]',this.RidesFetched[index]);
        console.log('dofffffffffffffffffffffffffffff');       
      }
    });


    this.confirmRideForm = this._fb.group({
      searchTerm: [''],
      rideStatus: [''],
      vechicleType: [''],
      date: ['']
    });

    this._socketIoService.listen('ActiveDrivers').subscribe({
      next: ((res: ActiveDriver[]) => {
        this.ActiveDrivers = res;
        console.log(this.ActiveDrivers);
      })
    })

    let details = {
      limit: this.limit,
      page: this.pageNumber,
      sort: 'none',
      date: this.confirmRideForm.get('date')?.value,
      searchTerm: '',
      vechicleType: this.confirmRideForm.get('vechicleType')?.value
    }
    this.fetchRides(details);
    this.fetcheTypes()

  }
  AssingBtnClicked(ride: Ride) {
    this.selectedRide = ride;
    this.RidesUser = ride.userId;
    let data = {
      cityId: this.selectedRide.cityId,
      typeId: this.selectedRide.typeId._id
    }
    this._socketIoService.emitNewEvent('getActiveDriversForAssign', data);
  }






































  AssingDriverToRide(driver: ActiveDriver) {
    this.selectedDriver = driver;
    let name = this.selectedDriver.driverName

    console.log('selectedDriver', this.selectedDriver.driverName);
    let data = {
      rideId: this.selectedRide._id,
      driverId: driver._id,
      rideStatus: 0
    }
    this._socketIoService.emitNewEvent('assignDriverToRide', data);


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


  previousBtn() {
    if (this.disablePrevBnt()) {
      this._toster.warning("Can't perform this action ", "Warning");
      return;
    }
    this.pageNumber = this.pageNumber > 1 ? --this.pageNumber : 1
    console.log(this.pageNumber);
    let details = {
      limit: this.limit,
      page: this.pageNumber,
      sort: 'none',
      date: this.confirmRideForm.get('date')?.value,
      searchTerm: this.confirmRideForm.get('searchTerm')?.value,
      vechicleType: this.confirmRideForm.get('vechicleType')?.value
    }
    this.fetchRides(details)
  }

  nextBtn() {
    if (this.disableNextBnt()) {
      this._toster.warning("Can't perform this action ", "Warning");
      return;
    }
    this.pageNumber = ++this.pageNumber
    console.log(this.pageNumber);
    let details = {
      limit: this.limit,
      page: this.pageNumber,
      sort: 'none',
      date: this.confirmRideForm.get('date')?.value,
      searchTerm: this.confirmRideForm.get('searchTerm')?.value,
      vechicleType: this.confirmRideForm.get('vechicleType')?.value
    }
    this.fetchRides(details);
  }


  fetchRides(details: object) {
    this._confirmRideService.getRides(details).pipe(
      catchError((error) => {
        this._toster.error('Error while fetching the Rides', 'Error');
        return of(error)
      })
    ).subscribe({
      next: (res) => {
        this.RidesFetched = res.Rides;
        this.totalRides = res.totalRides;
        console.log('totalRide', this.totalRides);

        console.log(this.RidesFetched);
      }
    })
  }

  searchRides(val: string) {
    let details = {
      limit: this.limit,
      page: this.pageNumber,
      sort: 'none',
      date: this.confirmRideForm.get('date')?.value,
      searchTerm: this.confirmRideForm.get('searchTerm')?.value,
      vechicleType: this.confirmRideForm.get('vechicleType')?.value
    }
    this.fetchRides(details)
  }

  ClearFilter() {
    let formValues = this.confirmRideForm.value
    if (!Object.values(formValues).some(value => value !== '')) {
      this._toster.info('There is nothing to clear', 'Info');
      return;
    }
    this.confirmRideForm.reset();


    let details = {
      limit: this.limit,
      page: this.pageNumber,
      sort: this.sort,
      date: this.confirmRideForm.get('date')?.value,
      searchTerm: this.confirmRideForm.get('searchTerm')?.value,
      vechicleType: this.confirmRideForm.get('vechicleType')?.value
    }
    this.fetchRides(details);
  }


  disablePrevBnt(): boolean {
    if (this.pageNumber == 1) {
      return true
    } else if (this.pageNumber == 0) {
      return true;
    }
    return false
  }

  disableNextBnt(): boolean {
    if (this.totalRides == this.pageNumber * this.limit) {
      return true;
    } else if (this.totalRides < this.pageNumber * this.limit) {
      return true;
    } else if (this.RidesFetched) {
      if (this.RidesFetched.length < 0) {
        return true;
      }
    } else if (this.pageNumber == 0) {
      return true;
    }
    return false
  }
}
