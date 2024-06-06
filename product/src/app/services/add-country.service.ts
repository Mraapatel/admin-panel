import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCountryService {

  constructor() { }

  private _http = inject(HttpClient);

  getCountry() {
    return this._http.get('http://localhost:5000/country').pipe(
      tap((_) => console.log('data fatched form server')
      )
    )
  }

  addCountry(formdata: object) {
    console.log('in service');
    console.log(formdata);
    return this._http.post('http://localhost:5000/country', formdata).pipe(
      tap((_) => {
        console.log('country added');
      })
    )
  }

  serchCountries(value: string) {
    return this._http.post('http://localhost:5000/country/searchCountry',{search:value}).pipe(
      tap((_) => {
        console.log('got countries');
      })
    )
  }
}
