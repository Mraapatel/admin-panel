import{b as o,j as s}from"./chunk-PFQXAC2Q.js";import{Y as n,ca as i}from"./chunk-5BOCFAQI.js";var l=(()=>{let t=class t{constructor(){this.backendUrl=s.BACKEND_URL,this._http=i(o)}saveZone(e){return this._http.post(`${this.backendUrl}city/addZone`,e)}getCities(e){return this._http.post(`${this.backendUrl}city/cities`,{countryId:e})}saveChangedZone(e){return this._http.post(`${this.backendUrl}city/saveChangedZone`,e)}};t.\u0275fac=function(c){return new(c||t)},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{l as a};
