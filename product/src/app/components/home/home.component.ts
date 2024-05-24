import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { SpinnerService } from '../../services/spinner.service';
import { loaderService } from '../../services/loader';
import { CommonModule } from '@angular/common';
import { BrowserNotificationService } from '../../services/browser-notification.service';

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

  private _browserNotification = inject(BrowserNotificationService)
  public count!: number

  private title = 'Browser Push Notifications!';

  updateCount() {
    this.count = parseInt(localStorage.getItem('notificationCount')!)
  }


  constructor(private _authService: AuthServiceService, public _loaderService: loaderService) {
    this._browserNotification.requestPermission();
    this.updateCount()
    // console.log(this._loaderService.spinnerCounter)
  }

  // start() {
  //   this._spinnerService.startSPinner();
  // }

  logOut() {
    this._authService.logout();
  }
}
