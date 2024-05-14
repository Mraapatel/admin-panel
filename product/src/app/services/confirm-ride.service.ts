import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Ride, VehicleType } from '../models/models.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfirmRideService {

  url = 'http://localhost:5000/confirmRide';
  url2 = 'http://localhost:5000/runningRequest';


  private _http = inject(HttpClient);
  constructor() { }

  getRides(data: object) {
    return this._http.post<{ totalRides: number, Rides: Ride[] }>(`${this.url}/getRides`, data)
  }

  getVehicleTypes() {
    return this._http.post<{ message: string, TypesArray: VehicleType[] }>(`${this.url}/getVehicleTypes`, {})
  }

  getDriverForAssignRide(data:object) {
    return this._http.post<{ message: string, TypesArray: VehicleType[] }>(`${this.url}/getDriverForAssignRide`, data)
  }

  assignDriverToRide(data:object) {
    return this._http.post<{ message: string, TypesArray: VehicleType[] }>(`${this.url2}/assingDriverToRide`, data)
  }
}
