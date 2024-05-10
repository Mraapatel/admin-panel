import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { SpinnerService } from '../../services/spinner.service';
import { loaderService } from '../../services/loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, MatProgressSpinnerModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // private _authService = inject(AuthServiceService);
  _spinnerService = inject(SpinnerService);
  // _loaderService = inject(loaderService);
  // spinner:boolean = false


  constructor(private _authService: AuthServiceService ,public _loaderService:loaderService) {
    // console.log(this._loaderService.spinnerCounter)
  }

  // start() {
  //   this._spinnerService.startSPinner();
  // }

  logOut() {
    this._authService.logout();
  }
}
