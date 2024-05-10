import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';

interface settingInterface {
  Stops: number,
  TimeOut: number,
  _id: string
}

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

  // @ViewChild('seletedStops') seletedStops!: ElementRef<HTMLSelectElement>



  private _fb = inject(FormBuilder);
  private _http = inject(HttpClient);
  private _toastr = inject(ToastrService)

  private _id!: string | undefined;
  private TimeOut!: number;
  private Stops!: number;
  Setting!: any;
  cuttentSetting!: settingInterface

  ngOnInit() {
    // let data = {
    //   id: 'getId'
    // }
    // this._http.post<settingInterface>('http://localhost:5000/setting', data).subscribe((res) => {
    //   if (res && res._id) {
    //     let a = res as settingInterface
    //     this._id = a._id;
    //     this.TimeOut = a.TimeOut;
    //     this.Stops = a.Stops
    //     console.log(this._id);
    //     console.log(this.TimeOut);
    //     console.log(this.Stops);
    //   } else {
    //     this._id = undefined;
    //     console.log(this._id);

    //   }
    // })
    // this.makeFormGroup();
    this.Setting = this._fb.group({
      timeOut: [this.TimeOut, Validators.required],
      stops: [this.Stops, Validators.required]
    });

    this.pageLoad();
    // this.getSettings();

  }

  pageLoad() {
    let data = {
      id: 'getId'
    }
    this._http.post<settingInterface>('http://localhost:5000/setting', data).subscribe((res) => {
      console.log(res);
      if (res) {
        this.cuttentSetting = res;
        console.log(this.cuttentSetting);
        this.Setting.get('timeOut').setValue(res.TimeOut);
        this.Setting.get('stops').setValue(res.Stops);
      }

      if (res && res._id) {
        let a = res as settingInterface
        this._id = a._id;
        this.TimeOut = a.TimeOut;
        this.Stops = a.Stops
      } else {
        this._id = undefined;
        console.log(this._id);
      }
    })
  }

  // getSettings() {
  //   this._http.get<settingInterface>('http://localhost:5000/setting').subscribe((res) => {
  //     this.cuttentSetting = res;
  //     console.log(this.cuttentSetting);
  //     console.log(res);
  //     if (res) {
  //       this.Setting.get('timeOut').setValue(res.TimeOut);
  //       this.Setting.get('stops').setValue(res.Stops);
  //     }
  //   });
  // }

  // makeFormGroup() {
  //   this.Setting = this._fb.group({
  //     timeOut: [this.TimeOut, Validators.required],
  //     stops: [this.Stops, Validators.required]
  //   });
  //   this.getSettings();
  // }

  storeSetting() {

    if (!this.Setting.get('stops')?.value || !this.Setting.get('timeOut')?.value) {
      this._toastr.warning('Please select the settings first', 'warning');
      return;
    }
    if (this.cuttentSetting) {
      if (this.cuttentSetting.Stops == this.Setting.get('stops')?.value && this.cuttentSetting.TimeOut == this.Setting.get('timeOut')?.value) {
        this._toastr.info('No chages Detected', 'Info');
        return;
      }
    }
    console.log(this.Setting.value);
    console.log(this.Setting.get('timeOut')?.value);
    let data = {
      _id: this._id,
      timeOut: this.Setting.get('timeOut')?.value,
      stops: this.Setting.get('stops')?.value
    }
    this._http.post<settingInterface>('http://localhost:5000/setting', data).pipe(
      tap((res) => {
        this._id = res._id;
        this._toastr.success('Setting updated successfully', 'Success');
        console.log(res);
        if (res) {
          this.Setting.get('timeOut').setValue(res.TimeOut);
          this.Setting.get('stops').setValue(res.Stops);
          if (this.cuttentSetting) {
            console.log('inside here--->');

            this.cuttentSetting.TimeOut = res.TimeOut;
            this.cuttentSetting.Stops = res.Stops;
          }
        }
        // let selectedS = this.seletedStops.nativeElement.querySelector(`option[value="${this.Setting.get('stops')?.value}"]`) as HTMLOptionElement;
        // if (selectedS) {
        //   selectedS.selected = true;
        // }
      })).subscribe()
  }

  get timeOut() {
    return this.Setting.get('timeOut')
  }
  get stops() {
    return this.Setting.get('stops')
  }

}
