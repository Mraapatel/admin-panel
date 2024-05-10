import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Settings } from '../models/models.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private _http  = inject(HttpClient)

  constructor() { }
  getSettings() {
    return this._http.get<Settings>('http://localhost:5000/setting')
  }
}
