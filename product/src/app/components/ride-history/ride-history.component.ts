import { Component, inject } from '@angular/core';
import { BrowserNotificationService } from '../../services/browser-notification.service';
import { RideHistoryService } from '../../services/ride-history.service';
import { catchError, of, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Ride, VehicleType } from '../../models/models.interface';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfirmRideService } from '../../services/confirm-ride.service';
import { environment } from '../../../environments/environment.development';
import { Loader } from '@googlemaps/js-api-loader';

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

  RidesFetched: Ride[] = [];
  rideHistory!: FormGroup;
  fetchedVehicleTypes: Array<VehicleType> = [];
  selectedRide!: Ride
  API_KEY = environment.API_KEY;
  map!: google.maps.Map;
  geocoder!: google.maps.Geocoder;
  rideRoute!: google.maps.Polyline


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
    this.loadDefaultMap();

  }

  loadDefaultMap() {
    const loader = new Loader({
      apiKey: this.API_KEY,
      libraries: ['places', 'drawing']
    });

    loader.load().then(() => {
      const mapEle = document.getElementById('map');
      if (mapEle) {
        // Load default map without marker
        this.map = new google.maps.Map(mapEle, {
          center: { lat: 25.4484, lng: 78.5685 },
          zoom: 6,
        });
        // this.initAutocomplete()
        this.geocoder = new google.maps.Geocoder();
      }
    }).catch(err => {
      console.error('Error loading Google Maps API:', err);
    });
  }

  fetchRides(details: object) {
    this._rideHistory.fetchRides(details).pipe(
      catchError((e) => {
        console.log('res', e.error.message);
        if (e.status === 404 && e.error.message === 'Currently No rides are available') {
          this._toster.error('No History found', 'Error');
          this.RidesFetched = []
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
    console.log('dkjakljf', this.rideHistory.get('vechicleType')?.value);

    let formValues = this.rideHistory.value
    if (!Object.values(formValues).some(value => value !== '' || null)) {
      this._toster.info('There is nothing to clear', 'Info');
      return;
    }
    this.rideHistory.reset();
    let details = {
      date: this.rideHistory.get('date')?.value,
      rideStatus: parseInt(this.rideHistory.get('rideStatus')?.value),
      searchTerm: this.rideHistory.get('searchTerm')?.value,
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

  downloadRideInfo( ride: Ride) {
    // event.stopPropagation();

    const csvData = this.convertToCSV(ride);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', 'trip_history.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  convertToCSV(data: Ride) {
    const flatData = this.flattenObject(data);
    const header = Object.keys(flatData).join(',');
    const row = Object.values(flatData).map(value => {
      if (Array.isArray(value)) {
        return `"${value.join(',')}"`;
      }
      return `"${value}"`;
    }).join(',');

    return [header, row].join('\n');
  }

  flattenObject(ob: any): any {
    const toReturn: any = {};

    for (const i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if (typeof ob[i] === 'object' && ob[i] !== null && !Array.isArray(ob[i])) {
        const flatObject = this.flattenObject(ob[i]);
        for (const x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;
          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  }

  // rideInfo(ride: Ride) {
  //   let latLng: [{ lat: number, lng: number }]
  //   this.selectedRide = ride;
  //   let address = [ride.startLocation, ...ride.route, ride.endLocation]
  //   console.log('addessses', address);
  //   address.forEach((a) => {
  //     let got = this.getLatLng(a);
  //     latLng.push(got)
  //   })
  //   console.log('latlng', latLng);
  // }

  // getLatLng(address: string): { lat: number, lng: number } {
  //   this.geocoder = new google.maps.Geocoder;
  //   let latlng
  //   this.geocoder.geocode({ address: address }, (results: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
  //     if (status === 'OK' && results) {
  //       const location = results[0].geometry.location;
  //       latlng = {
  //         lat: location.lat(),
  //         lng: location.lng()
  //       }
  //       console.log('latlng', latlng);
  //     } else {
  //       console.error('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  //   return latlng!
  // }

  async rideInfo(ride: Ride) {
    if (this.rideRoute) {
      console.log('inside the if condtion ');

      this.rideRoute.setMap(null); // Remove the polyline from the map
    }
    let latLng: { lat: number, lng: number }[] = [];
    this.selectedRide = ride;
    let address = [ride.startLocation, ...ride.route, ride.endLocation];
    console.log('addresses', address);

    for (const a of address) {
      try {
        let got = await this.getLatLng(a);
        latLng.push(got);
      } catch (error) {
        console.error(`Failed to get lat/lng for address ${a}:`, error);
      }
    }
    console.log('latlng', latLng);

    this.rideRoute = new google.maps.Polyline({
      path: latLng,
      // geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    })
    const bound = new google.maps.LatLngBounds()
    bound.extend(latLng[0])
    bound.extend(latLng[latLng.length - 1])
    this.map.fitBounds(bound);
    // this.map.setCenter(latLng[0])
    // this.map.setZoom(10)
    this.rideRoute.setMap(this.map)
  }


  getLatLng(address: string): Promise<{ lat: number, lng: number }> {
    return new Promise((resolve, reject) => {
      this.geocoder.geocode({ address: address }, (results: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
        if (status === google.maps.GeocoderStatus.OK && results) {
          const location = results[0].geometry.location;
          const latlng = {
            lat: location.lat(),
            lng: location.lng()
          };
          resolve(latlng);
        } else {
          reject('Geocode was not successful for the following reason: ' + status);
        }
      });
    });
  }
}
