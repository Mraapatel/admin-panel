import{a as M}from"./chunk-MWJ4WU3J.js";import{a as L}from"./chunk-FFH4G4ZB.js";import{h as B,j as O}from"./chunk-62B6BSLF.js";import{$b as F,Ab as U,Db as C,E as u,Fb as p,Jb as y,Qa as S,Qb as n,Rb as _,Sb as c,Ta as d,Tb as f,Yb as j,ac as P,ca as R,ha as D,hb as x,mb as b,o as m,pa as v,qa as E,qb as h,rb as k,tb as T,ub as w,vb as t,wb as e,wc as N,xb as g,xc as A}from"./chunk-5BOCFAQI.js";function $(l,a){if(l&1&&n(0),l&2){let r=p().$implicit;c(" ",r.countryInfo.countryCallingCode," ")}}function V(l,a){if(l&1&&n(0),l&2){let r=p().$implicit;c(" ",r.countryInfo.countryCallingCode," ")}}function W(l,a){if(l&1){let r=U();t(0,"tr")(1,"td",17),g(2,"img",18),e(),t(3,"td",17),n(4),e(),t(5,"td",19),x(6,$,1,1),n(7),e(),t(8,"td",19),n(9),e(),t(10,"td",20),x(11,V,1,1),n(12),e(),t(13,"td",20),n(14),e(),t(15,"td",21),n(16),e(),t(17,"td",21),n(18),e(),t(19,"td",19),n(20),e(),t(21,"td",19),g(22,"img",18),e(),t(23,"td",22)(24,"button",23),C("click",function(){let o=v(r).$implicit,s=p(2);return E(s.driverAcceptedRide(o._id,o.driverId._id,o.nearest))}),n(25,"Accept"),e(),t(26,"button",24),C("click",function(){let o=v(r).$implicit,s=p(2);return E(s.driverRejectedRide(o._id,o.driverId._id,o.nearest))}),n(27,"Reject"),e()(),t(28,"td",22)(29,"button",25),C("click",function(){let o=v(r).$implicit,s=p(2);return E(s.rideinfo(o))}),n(30,"Info"),e()()()}if(l&2){let r=a.$implicit,i=p(2);d(2),y("alt","",r.userId.userName," Icon"),b("src",i.backendUrl+"public/userProfile/"+r.userId.userProfile,S),d(2),_(r.userId.userName),d(2),h(6,r.countryInfo?6:-1),d(),c(" ",r.userId.userPhone,""),d(2),_(r.driverId.driverName),d(2),h(11,r.countryInfo?11:-1),d(),c(" ",r.driverId.driverPhone,""),d(2),f("",r.date," ",r.timeInString,""),d(2),_(r.startLocation),d(2),_(r.endLocation),d(2),_(r.typeId.vehicleType),d(2),y("alt","",r.typeId.vehicleIcon," Icon"),b("src",i.backendUrl+"public/vehicleTypes/"+r.typeId.vehicleIcon,S)}}function z(l,a){if(l&1&&T(0,W,31,17,"tr",null,k),l&2){let r=p();w(r.runningRequests)}}function K(l,a){l&1&&(t(0,"div",8)(1,"h3"),n(2,"No Rides Found"),e()())}function H(l,a){if(l&1&&(t(0,"td",30),n(1),e()),l&2){let r=a.$implicit,i=a.$index;d(),f(":",i+1,"-",r,"")}}function G(l,a){l&1&&(t(0,"td"),n(1,": No Way Points for this Ride"),e())}function J(l,a){if(l&1&&(t(0,"div",26),g(1,"img",27),e(),t(2,"div",28)(3,"table",29),g(4,"tr",2),t(5,"tr")(6,"th"),n(7,"User Name "),e(),t(8,"td"),n(9),e()(),t(10,"tr")(11,"th"),n(12,"User Phone"),e(),t(13,"td"),n(14),e()(),t(15,"tr")(16,"th"),n(17,"User Email "),e(),t(18,"td"),n(19),e()(),t(20,"tr")(21,"th"),n(22,"Book Date"),e(),t(23,"td"),n(24),e()(),t(25,"tr")(26,"th"),n(27,"Book Time"),e(),t(28,"td"),n(29),e()(),t(30,"tr")(31,"th"),n(32,"PickUp Location "),e(),t(33,"td"),n(34),e()(),t(35,"tr")(36,"th"),n(37,"Drop-Off Location "),e(),t(38,"td"),n(39),e()(),t(40,"tr")(41,"th"),n(42,"Way Points: "),e(),T(43,H,2,2,"td",30,k),x(45,G,2,0,"td"),e(),t(46,"tr")(47,"th"),n(48,"Service Type "),e(),t(49,"td"),n(50),e()(),t(51,"tr")(52,"th"),n(53,"Total Distance "),e(),t(54,"td"),n(55),F(56,"number"),e()(),t(57,"tr")(58,"th"),n(59,"Estimated Time "),e(),t(60,"td"),n(61),e()(),t(62,"tr")(63,"th"),n(64,"Estimated Fare "),e(),t(65,"td"),n(66),F(67,"number"),e()()()()),l&2){let r=p();d(),y("alt","",r.selectedRidesInfo.userId.userName," Icon"),b("src",r.backendUrl+"public/userProfile/"+r.selectedRidesInfo.userId.userProfile,S),d(8),c(": ",r.selectedRidesInfo.userId.userName,""),d(5),f(" : ",r.selectedRidesInfo.countryInfo.countryCallingCode," ",r.selectedRidesInfo.userId.userPhone,""),d(5),c(": ",r.selectedRidesInfo.userId.userEmail,""),d(5),c(": ",r.selectedRidesInfo.date,""),d(5),c(": ",r.selectedRidesInfo.timeInString,""),d(5),c(": ",r.selectedRidesInfo.startLocation,""),d(5),c(": ",r.selectedRidesInfo.endLocation,""),d(4),w(r.selectedRidesInfo.route),d(2),h(45,r.selectedRidesInfo.route&&r.selectedRidesInfo.route.length==0?45:-1),d(5),c(": ",r.selectedRidesInfo.typeId.vehicleType,""),d(5),c(": ",P(56,17,r.selectedRidesInfo.totalDistance,"1.2-2")," Km"),d(6),c(" : ",r.selectedRidesInfo.totalTime," m "),d(5),f(" : ",P(67,20,r.selectedRidesInfo.totalFare,"1.2-2")," ",r.selectedRidesInfo.countryInfo.currency,"")}}var de=(()=>{let a=class a{constructor(){this._socketIoService=R(L),this._toster=R(B),this._runningRequestService=R(M),this.runningRequests=[],this.backendUrl=O.BACKEND_URL}ngOnInit(){let i={status:1};this._runningRequestService.getAllRunningRequest(i).pipe(u(o=>(this._toster.error("Error while fetching the all running requests","Error"),m(o)))).subscribe({next:o=>{this.runningRequests.unshift(...o.Requests),console.log(this.runningRequests)}}),this._socketIoService.listen("assignedRideWithDriver").pipe(u(o=>(this._toster.error("Error getting the Arrived Requests"),m(o)))).subscribe({next:o=>{console.log(o),this.runningRequests.push(o)}}),this.listninRremoveRideFormList(),this.listningRejectedRide(),this.listningToCron(),this.listningToCronFormManullyAssignedRides()}rideinfo(i){this.selectedRidesInfo=i}listninRremoveRideFormList(){this._socketIoService.listen("acceptedRideWithDriver").pipe(u(i=>(this._toster.error("Error getting the acceptedRideWithDriver","Error"),m(i)))).subscribe({next:i=>{let o=this.runningRequests.findIndex(s=>s._id===i._id);console.log(i),this.runningRequests.splice(o,1)}})}listningRejectedRide(){this._socketIoService.listen("rejectedRideByDriver").pipe(u(i=>(this._toster.error("Error getting the acceptedRideWithDriver","Error"),m(i)))).subscribe({next:i=>{let o=this.runningRequests.findIndex(s=>s._id===i._id);console.log(i),this.runningRequests.splice(o,1)}})}listningToCron(){this._socketIoService.listen("updateListFromCron").pipe(u(i=>(this._toster.error("Error getting the rides form cron","Error"),m(i)))).subscribe({next:i=>{this.TimeOut=i.settings.TimeOut;let o=this.runningRequests.findIndex(s=>s._id===i._id);console.log("index",o),o===-1?this.runningRequests.push(i):this.runningRequests[o]=i,console.log(i)}}),this._socketIoService.listen("NoDriverRemaining-ByCron").pipe(u(i=>(this._toster.error("Error getting the rides form cron","Error"),m(i)))).subscribe({next:i=>{let o=this.runningRequests.findIndex(s=>s._id==i.rideId);console.warn("NoDriverRemaining",i.rideId),this.runningRequests.splice(o,1),console.log(i)}}),this._socketIoService.listen("PutRideOnHold-FromCron").pipe(u(i=>(this._toster.error("Error getting the rides form cron","Error"),m(i)))).subscribe({next:i=>{let o=this.runningRequests.findIndex(s=>s._id==i.rideId);o!==-1&&(console.warn("putrideonhold",i.rideId),this.runningRequests.splice(o,1)),console.log(i)}}),this._socketIoService.listen("rideCancledByAdmin").pipe(u(i=>(this._toster.error("Error getting the rides form cron","Error"),m(i)))).subscribe({next:i=>{let o=this.runningRequests.findIndex(s=>s._id==i.rideId);o!==-1&&(console.warn("rideCancledByAdmin",i.rideId),this.runningRequests.splice(o,1)),console.log(i)}})}listningToCronFormManullyAssignedRides(){this._socketIoService.listen("TimesUpForAssigndRides").pipe(u(i=>(this._toster.error("Error getting the rides form cron","Error"),m(i)))).subscribe({next:i=>{this.runningRequests.forEach((o,s)=>{i.includes(o._id)&&this.runningRequests.splice(s,1)}),console.log(i)}})}driverAcceptedRide(i,o,s){let q={rideId:i,driverId:o,nearest:s};this._runningRequestService.driverAcceptedRequest(q).pipe(u(I=>(this._toster.error("Error confirming the ride","Error"),m(I)))).subscribe({next:I=>{this._socketIoService.emitNewEvent("updateCountDes",{})}})}driverRejectedRide(i,o,s){console.log("driverRejectedRide called");let q={rideId:i,driverId:o,nearest:s};this._runningRequestService.driverRejectedRequest(q).pipe(u(I=>(this._toster.error("Some Error Occured while rejecting the request","Error"),m(I)))).subscribe({next:()=>{this._socketIoService.emitNewEvent("updateCount",{})}})}};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=D({type:a,selectors:[["app-running-request"]],standalone:!0,features:[j],decls:49,vars:4,consts:[[1,"table-responsive","rounded"],[1,"d-flex","flex-column","justify-content-center"],[1,"text-center"],[1,"text-danger"],[1,"table","table-responsive","shadow"],[1,"border","text-center","p-1","py-2","bg-dark","text-white","id"],[1,"border","text-center","p-1","py-2","bg-dark","text-white"],[1,"border","text-center","p-1","py-2","bg-dark","text-white","width"],[1,"container","d-flex","justify-content-center","text-danger"],["id","infoModal",1,"modaldiv","modal","fade"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header","text-center"],[1,"modal-title"],["type","button","data-bs-dismiss","modal",1,"btn-close"],[1,"modal-footer"],["data-bs-dismiss","modal",1,"btn","btn-secondary","shadow"],[1,"border","text-center","p-1","py-2","id"],["onerror","this.src='assets/noImageFound.jpg'",1,"my-1","border","profile","rounded","img-fluid",3,"src","alt"],[1,"border","text-center","p-1","py-2"],[1,"border","text-center","p-1","py-2","width"],[1,"border","text-center","p-1","py-2","width","width"],[1,"border","text-center"],[1,"btn","btn-success","my-2","mx-2",3,"click"],[1,"btn","btn-danger",3,"click"],["data-bs-toggle","modal","data-bs-target","#infoModal",1,"btn","btn-sm","btn-primary","mx-2",3,"click"],[1,"text-center","my-1"],["onerror","this.src='assets/noImageFound.jpg'",1,"my-1","border","profile2","rounded","img-fluid",3,"src","alt"],[1,"container","table-responsive","d-flex","justify-content-start"],["id","InfoTable",1,"ms-3"],[1,"space"]],template:function(o,s){o&1&&(t(0,"div")(1,"div",0)(2,"div",1)(3,"h2",2),n(4,"Running Requests"),e(),t(5,"h6",2),n(6,"Accept Time Out "),t(7,"span",3),n(8),e(),n(9,"sec"),e()(),t(10,"table",4)(11,"tr")(12,"th",5),n(13,"User Profile"),e(),t(14,"th",5),n(15,"User Name"),e(),t(16,"th",6),n(17,"User Phone"),e(),t(18,"th",6),n(19,"Driver Name"),e(),t(20,"th",7),n(21,"Driver Phone"),e(),t(22,"th",6),n(23,"Pickup Time"),e(),t(24,"th",6),n(25,"Pickup address"),e(),t(26,"th",6),n(27,"Drop off address"),e(),t(28,"th",6),n(29,"Service Type"),e(),t(30,"th",6),n(31,"Service Image"),e(),t(32,"th",6),n(33,"Action"),e(),t(34,"th",6),n(35,"info"),e()(),x(36,z,2,0),e(),x(37,K,3,0,"div",8),e(),t(38,"div",9)(39,"div",10)(40,"div",11)(41,"div",12)(42,"h4",13),n(43,"Ride Information"),e(),g(44,"button",14),e(),x(45,J,68,23),t(46,"div",15)(47,"button",16),n(48,"Close"),e()()()()()()),o&2&&(d(8),c("",s.TimeOut," "),d(28),h(36,s.runningRequests.length>0?36:-1),d(),h(37,s.runningRequests&&s.runningRequests.length==0?37:-1),d(8),h(45,s.selectedRidesInfo?45:-1))},dependencies:[A,N],styles:[".profile[_ngcontent-%COMP%]{height:60px;width:60px;border-radius:5px}.profile2[_ngcontent-%COMP%]{height:80px;width:80px;border-radius:5px}.width[_ngcontent-%COMP%]{max-width:8rem}"]});let l=a;return l})();export{de as RunningRequestComponent};