import{f as ee,g as w,h as j,m as te,n as k,p as ne,u as ie}from"./chunk-FRFEI4JV.js";import{a as X,b as _,e as Q,f as U,h as ue}from"./chunk-NTPN7U4T.js";import{b as oe,d as f,g as re,h as ae,j as se,m as le,n as de,s as me,u as ce}from"./chunk-HEVKUVIP.js";import{a as J,c as K,d as Y,e as F,f as Z,h as A,i as pe}from"./chunk-DF4QYGB4.js";import{$a as T,Da as b,Db as $,E as y,Fb as L,Qb as d,Ta as u,Ua as E,V as C,Va as G,W,Xa as I,Y as x,Yb as P,Za as N,ab as M,ba as R,ca as c,ha as D,hb as S,ka as z,mb as V,o as v,oc as O,p as H,qb as h,vb as l,wb as s,xb as g}from"./chunk-5BOCFAQI.js";var Se=(()=>{let e=class e extends k{constructor(i,o,r){super(i,o,r,c(I,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(o){return new(o||e)(R(O),R(w),R(j))},e.\u0275prov=x({token:e,factory:e.\u0275fac});let t=e;return t})();function we(){return new te}function xe(t,e,n){return new ie(t,e,n)}var he=[{provide:j,useFactory:we},{provide:k,useClass:Se},{provide:N,useFactory:xe,deps:[F,k,M]}],Re=[{provide:w,useFactory:()=>new ne},{provide:b,useValue:"BrowserAnimations"},...he],Ke=[{provide:w,useClass:ee},{provide:b,useValue:"NoopAnimations"},...he];function ge(){return T("NgEagerAnimations"),[...Re]}function De(t,e){t&1&&(l(0,"span",20),d(1,"username is required"),s())}function Ee(t,e){t&1&&(l(0,"span",20),d(1,"username should be "),l(2,"b"),d(3,"4"),s(),d(4," character long"),s())}function Ie(t,e){t&1&&(l(0,"span",20),d(1,"character execeded"),s())}function Ne(t,e){if(t&1&&S(0,De,2,0,"span",20)(1,Ee,5,0,"span",20)(2,Ie,2,0,"span",20),t&2){let n=L();h(0,n.getsUername.errors!=null&&n.getsUername.errors.required?0:-1),u(),h(1,n.getsUername.errors!=null&&n.getsUername.errors.minlength?1:-1),u(),h(2,n.getsUername.errors!=null&&n.getsUername.errors.maxlength?2:-1)}}function Te(t,e){t&1&&(l(0,"span",20),d(1,"password is required"),s())}function Me(t,e){t&1&&(l(0,"span",20),d(1,"username should be "),l(2,"b"),d(3,"4"),s(),d(4," character long"),s())}function Pe(t,e){t&1&&(l(0,"span",20),d(1,"character execeded"),s())}function Oe(t,e){if(t&1&&S(0,Te,2,0,"span",20)(1,Me,5,0,"span",20)(2,Pe,2,0,"span",20),t&2){let n=L();h(0,n.getPassword.errors!=null&&n.getPassword.errors.required?0:-1),u(),h(1,n.getPassword.errors!=null&&n.getPassword.errors.minlength?1:-1),u(),h(2,n.getPassword.errors!=null&&n.getPassword.errors.maxlength?2:-1)}}var fe=(()=>{let e=class e{constructor(i,o,r){this._authservice=i,this._fb=o,this._tostr=r,this.route=c(_),this.adminDetails=this._fb.group({username:["",[f.required,f.minLength(4),f.maxLength(15)]],password:["",[f.required,f.minLength(4),f.maxLength(15)]]})}ngOnInit(){this.isIdle=this._authservice.IdleState,console.log(this.isIdle)}get getsUername(){return this.adminDetails.get("username")}get getPassword(){return this.adminDetails.get("password")}loginUser(){if(this.adminDetails.valid)this._authservice.login({username:this.adminDetails.get("username")?.value,password:this.adminDetails.get("password")?.value}).pipe(C(i=>{i.error||(this.adminDetails.reset(),this._tostr.success("Logged in successfully","Success"),console.log("logged "),console.log(this._authservice.IdleState),this.route.navigate(["home/user"])),console.log(i)}),y(i=>(this._tostr.error("invalid credentials","error"),v(i)))).subscribe();else{this._tostr.warning("Please enter your credentials","Warning");return}}ngOnDestroy(){}};e.\u0275fac=function(o){return new(o||e)(E(U),E(me),E(A))},e.\u0275cmp=D({type:e,selectors:[["app-admin"]],standalone:!0,features:[P],decls:30,vars:4,consts:[[1,"container","mainContainer"],["id","mymodal",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal",1,"btn-close"],[1,"container"],["id","loginForm","enctype","multipart/form-data",3,"submit","formGroup"],[1,"mb-3"],["for","username",1,"form-label"],["type","text","id","userName","name","username","placeholder","enter your username","formControlName","username",1,"form-control"],["for","passwrod",1,"form-label"],["type","passwrod","id","passwrod","name","passwrod","placeholder","enter passwrod","formControlName","password",1,"form-control"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-info",3,"disabled"],[1,"modal-footer"],["data-bs-dismiss","modal",1,"btn","btn-secondary"],[1,"mb-2"],["type","button","data-bs-toggle","modal","data-bs-target","#mymodal",1,"btn","homebtn"],["src","assets/login1.jpg","alt","image not foud ","onerror","this.src='assets/noImageFound.jpg'",1,"rounded","img-fluid"],[1,"text-danger"]],template:function(o,r){o&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),d(6,"login"),s(),g(7,"button",6),s(),l(8,"div",7)(9,"form",8),$("submit",function(){return r.loginUser()}),l(10,"div",9)(11,"label",10),d(12,"Username:"),s(),g(13,"input",11),S(14,Ne,3,3),s(),l(15,"div",9)(16,"label",12),d(17,"passwrod:"),s(),g(18,"input",13),S(19,Oe,3,3),s(),l(20,"div",9)(21,"button",14),d(22,"Login"),s()()()(),l(23,"div",15)(24,"button",16),d(25,"Close"),s()()()()(),l(26,"h1",17),d(27,"Click to Login"),s(),l(28,"button",18),g(29,"img",19),s()()),o&2&&(u(9),V("formGroup",r.adminDetails),u(5),h(14,r.getsUername!==null&&(r.getsUername.touched||r.getsUername.dirty)?14:-1),u(5),h(19,r.getPassword!==null&&(r.getPassword.touched||r.getPassword.dirty)?19:-1),u(2),V("disabled",r.adminDetails.invalid))},dependencies:[ce,se,oe,re,ae,le,de],styles:[".ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%]{border-left:5px solid green}.ng-invalid[_ngcontent-%COMP%]:not(form){border-left:5px solid red}.mainContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;width:100vw;justify-content:center;align-items:center}.homebtn[_ngcontent-%COMP%]{height:40vh;width:40vw;border:2px solid black;border-radius:30px;background-color:#57d5f1}"]});let t=e;return t})();var p=(t,e)=>{let n=c(_),i=c(U),o=c(A),r;i.fetchtoken().pipe(C(a=>{r=a}),y(a=>(o.error("cannot get the token","error"),v(a)))).subscribe();let m=localStorage.getItem("JWT_TOKEN");return m?!0:(console.log(`token in ls ${m}  and tooken in service ${r}`),n.navigate(["login"]),!1)};var ve=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",component:fe,title:"login"},{path:"home",loadComponent:()=>import("./chunk-2WPM4X6W.js").then(t=>t.HomeComponent),title:"Home",canActivate:[p],children:[{path:"vehicle_type",loadComponent:()=>import("./chunk-JYECP6IY.js").then(t=>t.VehicleTypeComponent),canActivate:[p],title:"Vehicle-type"},{path:"add_country",loadComponent:()=>import("./chunk-H27VY4TZ.js").then(t=>t.AddCountryComponent),canActivate:[p],title:"Country"},{path:"city",loadComponent:()=>import("./chunk-5JPCCPC7.js").then(t=>t.CityComponent),canActivate:[p],title:"city"},{path:"Vehicle_Pricing",loadComponent:()=>import("./chunk-PUUKJWBI.js").then(t=>t.VehiclePricingComponent),canActivate:[p],title:"Vehicle-Pricing"},{path:"setting",loadComponent:()=>import("./chunk-S5IONT5M.js").then(t=>t.SettingComponent),canActivate:[p],title:"Setting"},{path:"user",loadComponent:()=>import("./chunk-KZJAIDS3.js").then(t=>t.UserComponent),canActivate:[p],title:"User"},{path:"driverList",loadComponent:()=>import("./chunk-GCTXIYYS.js").then(t=>t.DriverListComponent),canActivate:[p],title:"Driver-List"},{path:"createRide",loadComponent:()=>import("./chunk-NKPKXQUF.js").then(t=>t.CreateRideComponent),canActivate:[p],title:"Create-Ride"},{path:"confirmRide",loadComponent:()=>import("./chunk-H4ANFBA4.js").then(t=>t.ConfirmRideComponent),canActivate:[p],title:"Confirm-Ride"},{path:"runningRequest",loadComponent:()=>import("./chunk-37U7RZHD.js").then(t=>t.RunningRequestComponent),canActivate:[p],title:"Running-Request"},{path:"rideHistory",loadComponent:()=>import("./chunk-P4N6DUVE.js").then(t=>t.RideHistoryComponent),canActivate:[p],title:"Ride-History"}]}];var ye=(t,e)=>{let n=Fe(),i=c(A),o=c(ue),r=c(_);if(o.startSPinner(),t.url.includes("/authenticate"))return console.error("Inside the uthenticate"),e(t);if(n){let m=t.clone({setHeaders:{Authorization:`Bearer ${n}`}});return e(m).pipe(C(a=>{a instanceof J&&o.stopSpinner()}),y(a=>(console.log("error hai bro1",a),a.status===403?(a.status===403&&a.error.message,i.error(`${a.error.message}`,"Error"),i.info("Please login again","info"),r.navigate(["login"]),v(a)):(a.status===400&&(console.log("error hai bro2",a),a.error.Message==="No users found"?i.error(`${a.error.Message}`,"Error"):a.error.Message==="There are no Drivers"&&i.error(`${a.error.Message}`,"Error")),o.stopSpinner(),H(a)))))}return e(t)};function Fe(){return localStorage.getItem("JWT_TOKEN")}var je="@",ke=(()=>{let e=class e{constructor(i,o,r,m,a){this.doc=i,this.delegate=o,this.zone=r,this.animationType=m,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=c(I,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-ZOTJYABI.js")).catch(o=>{throw new W(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:r})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let m=new r(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(i,o){let r=this.delegate.createRenderer(i,o);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let m=new B(r);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let be=a.createRenderer(i,o);m.use(be)}).catch(a=>{m.use(r)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){G()},e.\u0275prov=x({token:e,factory:e.\u0275fac});let t=e;return t})(),B=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let n of this.replay)n(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,n){this.delegate.appendChild(e,n)}insertBefore(e,n,i,o){this.delegate.insertBefore(e,n,i,o)}removeChild(e,n,i){this.delegate.removeChild(e,n,i)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,i,o){this.delegate.setAttribute(e,n,i,o)}removeAttribute(e,n,i){this.delegate.removeAttribute(e,n,i)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,i,o){this.delegate.setStyle(e,n,i,o)}removeStyle(e,n,i){this.delegate.removeStyle(e,n,i)}setProperty(e,n,i){this.shouldReplay(n)&&this.replay.push(o=>o.setProperty(e,n,i)),this.delegate.setProperty(e,n,i)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,i){return this.shouldReplay(n)&&this.replay.push(o=>o.listen(e,n,i)),this.delegate.listen(e,n,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(je)}};function Ce(t="animations"){return T("NgAsyncAnimations"),z([{provide:N,useFactory:(e,n,i)=>new ke(e,n,i,t),deps:[O,F,M]},{provide:b,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var _e={providers:[Q(ve),K(Y([ye])),pe({timeOut:3e3,positionClass:"toast-top-right",preventDuplicates:!0,closeButton:!0,toastClass:"ngx-toastr",progressBar:!0,extendedTimeOut:1e3}),ge(),Ce()]};var Ae=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=D({type:e,selectors:[["app-root"]],standalone:!0,features:[P],decls:1,vars:0,template:function(o,r){o&1&&g(0,"router-outlet")},dependencies:[X],styles:["*[_ngcontent-%COMP%]{height:100vh;width:100vw}"]});let t=e;return t})();Z(Ae,_e).catch(t=>console.error(t));
