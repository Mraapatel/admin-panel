import{Y as f,h as a}from"./chunk-5BOCFAQI.js";var p=(()=>{let t=class t{constructor(){this.permission=this.isSupported()?"default":"denied"}isSupported(){return"Notification"in window}requestPermission(){let n=this;"Notification"in window&&Notification.requestPermission(function(i){return n.permission=i})}create(n,i){let c=this;return new a(function(e){"Notification"in window||(console.log("Notifications are not available in this environment"),e.complete()),c.permission!=="granted"&&(console.log("The user hasn't granted you permission to send push notifications"),e.complete());let o=new Notification(n,i);o.onshow=function(r){return e.next({notification:o,event:r})},o.onclick=function(r){return e.next({notification:o,event:r})},o.onerror=function(r){return e.error({notification:o,event:r})},o.onclose=function(){return e.complete()}})}generateNotification(n){let i=this,c={body:n.alertContent,icon:"http://www.martijnmuijs.nl/wp-content/uploads/2009/07/home-icon.jpg"},e=i.create(n.title,c).subscribe()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();export{p as a};