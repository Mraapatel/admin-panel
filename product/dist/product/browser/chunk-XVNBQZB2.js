import{a as B}from"./chunk-EGQUZQ3G.js";import{b as q,d as p,g as M,h as D,j as I,m as G,n as A,o as j,p as F,q as R,s as U,u as H}from"./chunk-HEVKUVIP.js";import{b as P,h as W}from"./chunk-CXD4KBSD.js";import{Ab as k,Db as v,E as O,Fb as _,Qb as t,Ta as m,V as K,Yb as L,ca as f,ha as V,hb as c,mb as g,o as N,pa as x,qa as b,qb as u,vb as e,wb as n,xb as d}from"./chunk-5BOCFAQI.js";function $(i,s){if(i&1&&(e(0,"option",27),t(1,"10 seconds"),n(),e(2,"option",28),t(3,"20 seconds"),n(),e(4,"option",29),t(5,"30 seconds"),n(),e(6,"option",30),t(7,"45 seconds"),n(),e(8,"option",31),t(9,"60 seconds"),n(),e(10,"option",32),t(11,"90 seconds"),n(),e(12,"option",33),t(13,"120 seconds"),n()),i&2){let a=_();g("selected",a.cuttentSetting.TimeOut==10),m(2),g("selected",a.cuttentSetting.TimeOut==20),m(2),g("selected",a.cuttentSetting.TimeOut==30),m(2),g("selected",a.cuttentSetting.TimeOut==45),m(2),g("selected",a.cuttentSetting.TimeOut==60),m(2),g("selected",a.cuttentSetting.TimeOut==90),m(2),g("selected",a.cuttentSetting.TimeOut==120)}}function z(i,s){i&1&&(e(0,"option",34),t(1,"10 seconds"),n(),e(2,"option",35),t(3,"20 seconds"),n(),e(4,"option",36),t(5,"30 seconds"),n(),e(6,"option",37),t(7,"45 seconds"),n(),e(8,"option",38),t(9,"60 seconds"),n(),e(10,"option",39),t(11,"90 seconds"),n(),e(12,"option",40),t(13,"120 seconds"),n())}function Z(i,s){if(i&1&&(e(0,"option",41),t(1,"1 stop"),n(),e(2,"option",42),t(3,"2 stops"),n(),e(4,"option",43),t(5,"3 stops"),n(),e(6,"option",44),t(7,"4 stops"),n(),e(8,"option",45),t(9,"5 stops"),n()),i&2){let a=_();g("selected",a.cuttentSetting.Stops==1),m(2),g("selected",a.cuttentSetting.Stops==2),m(2),g("selected",a.cuttentSetting.Stops==3),m(2),g("selected",a.cuttentSetting.Stops==4),m(2),g("selected",a.cuttentSetting.Stops==5)}}function J(i,s){i&1&&(e(0,"option",46),t(1,"1 stop"),n(),e(2,"option",47),t(3,"2 stops"),n(),e(4,"option",48),t(5,"3 stops"),n(),e(6,"option",49),t(7,"4 stops"),n(),e(8,"option",50),t(9,"5 stops"),n())}function Q(i,s){i&1&&(e(0,"span",17),t(1,"Please enter the secreate key"),n(),d(2,"br"))}function X(i,s){i&1&&(e(0,"span",17),t(1," Minimun length should be "),e(2,"b"),t(3,"107"),n()(),d(4,"br"))}function Y(i,s){i&1&&(e(0,"span",17),t(1,"Maximum length should be "),e(2,"b"),t(3,"107"),n()())}function ee(i,s){if(i&1&&c(0,Q,3,0)(1,X,5,0)(2,Y,4,0,"span",17),i&2){let a,r,l,o=_();u(0,!((a=o.Stripe.get("secreateKey"))==null||a.errors==null)&&a.errors.required?0:-1),m(),u(1,!((r=o.Stripe.get("secreateKey"))==null||r.errors==null)&&r.errors.minlength?1:-1),m(),u(2,!((l=o.Stripe.get("secreateKey"))==null||l.errors==null)&&l.errors.maxlength?2:-1)}}function te(i,s){i&1&&(e(0,"span",17),t(1,"Please enter the secreate key"),n(),d(2,"br"))}function ie(i,s){i&1&&(e(0,"span",17),t(1," Minimun length should be "),e(2,"b"),t(3,"107"),n()(),d(4,"br"))}function ne(i,s){i&1&&(e(0,"span",17),t(1,"Maximum length should be "),e(2,"b"),t(3,"107"),n()())}function le(i,s){if(i&1&&c(0,te,3,0)(1,ie,5,0)(2,ne,4,0,"span",17),i&2){let a,r,l,o=_();u(0,!((a=o.Stripe.get("publicKey"))==null||a.errors==null)&&a.errors.required?0:-1),m(),u(1,!((r=o.Stripe.get("publicKey"))==null||r.errors==null)&&r.errors.minlength?1:-1),m(),u(2,!((l=o.Stripe.get("publicKey"))==null||l.errors==null)&&l.errors.maxlength?2:-1)}}function oe(i,s){i&1&&(e(0,"span",17),t(1,"Please enter the sid "),n(),d(2,"br"))}function re(i,s){i&1&&(e(0,"span",17),t(1," Minimun length should be "),e(2,"b"),t(3,"34"),n()(),d(4,"br"))}function ae(i,s){i&1&&(e(0,"span",17),t(1,"Maximum length should be "),e(2,"b"),t(3,"34"),n()())}function se(i,s){if(i&1&&c(0,oe,3,0)(1,re,5,0)(2,ae,4,0,"span",17),i&2){let a,r,l,o=_();u(0,!((a=o.Twilio.get("sid"))==null||a.errors==null)&&a.errors.required?0:-1),m(),u(1,!((r=o.Twilio.get("sid"))==null||r.errors==null)&&r.errors.minlength?1:-1),m(),u(2,!((l=o.Twilio.get("sid"))==null||l.errors==null)&&l.errors.maxlength?2:-1)}}function me(i,s){i&1&&(e(0,"span",17),t(1,"Please enter the AuthToken"),n(),d(2,"br"))}function ue(i,s){i&1&&(e(0,"span",17),t(1," Minimun length should be "),e(2,"b"),t(3,"32"),n()(),d(4,"br"))}function de(i,s){i&1&&(e(0,"span",17),t(1,"Maximum length should be "),e(2,"b"),t(3,"32"),n()())}function pe(i,s){if(i&1&&c(0,me,3,0)(1,ue,5,0)(2,de,4,0,"span",17),i&2){let a,r,l,o=_();u(0,!((a=o.Twilio.get("authToken"))==null||a.errors==null)&&a.errors.required?0:-1),m(),u(1,!((r=o.Twilio.get("authToken"))==null||r.errors==null)&&r.errors.minlength?1:-1),m(),u(2,!((l=o.Twilio.get("authToken"))==null||l.errors==null)&&l.errors.maxlength?2:-1)}}function ce(i,s){i&1&&(e(0,"span",17),t(1,"Please enter the Phone Number"),n(),d(2,"br"))}function ge(i,s){i&1&&(e(0,"span",17),t(1," Minimun length should be "),e(2,"b"),t(3,"10"),n()(),d(4,"br"))}function _e(i,s){i&1&&(e(0,"span",17),t(1,"Maximum length should be "),e(2,"b"),t(3,"10"),n()())}function he(i,s){if(i&1&&c(0,ce,3,0)(1,ge,5,0)(2,_e,4,0,"span",17),i&2){let a,r,l,o=_();u(0,!((a=o.Twilio.get("phoneNumber"))==null||a.errors==null)&&a.errors.required?0:-1),m(),u(1,!((r=o.Twilio.get("phoneNumber"))==null||r.errors==null)&&r.errors.minlength?1:-1),m(),u(2,!((l=o.Twilio.get("phoneNumber"))==null||l.errors==null)&&l.errors.maxlength?2:-1)}}function Se(i,s){i&1&&(e(0,"span",17),t(1,"Please enter the Email"),n(),d(2,"br"))}function fe(i,s){if(i&1&&c(0,Se,3,0),i&2){let a,r=_();u(0,!((a=r.Email.get("email"))==null||a.errors==null)&&a.errors.required?0:-1)}}function xe(i,s){i&1&&(e(0,"span",17),t(1,"Please enter the Email"),n(),d(2,"br"))}function be(i,s){if(i&1&&c(0,xe,3,0),i&2){let a,r=_();u(0,!((a=r.Email.get("email"))==null||a.errors==null)&&a.errors.required?0:-1)}}var ke=(()=>{let s=class s{constructor(){this._fb=f(U),this._http=f(P),this._toastr=f(W),this._settingService=f(B)}ngOnInit(){this.Setting=this._fb.group({timeOut:[this.TimeOut,p.required],stops:[this.Stops,p.required]}),this.Stripe=this._fb.group({secreateKey:["",[p.required,p.maxLength(107),p.minLength(107)]],publicKey:["",[p.required,p.maxLength(107),p.minLength(107)]]}),this.Twilio=this._fb.group({sid:["",[p.required,p.maxLength(34),p.minLength(34)]],authToken:["",[p.required,p.maxLength(32),p.minLength(32)]],phoneNumber:["",[p.required,p.maxLength(10),p.minLength(10)]]}),this.Email=this._fb.group({email:["",[p.required,p.maxLength(2),p.minLength(2)]],password:["",[p.required,p.maxLength(8),p.minLength(50)]]}),this.pageLoad(),this.getAllKeys()}pageLoad(){let r={id:"getId"};this._http.post("http://localhost:5000/setting",r).subscribe(l=>{if(console.log(l),l&&(this.cuttentSetting=l,console.log(this.cuttentSetting),this.Setting.get("timeOut").setValue(l.TimeOut),this.Setting.get("stops").setValue(l.Stops)),l&&l._id){let o=l;this._id=o._id,this.TimeOut=o.TimeOut,this.Stops=o.Stops}else this._id=void 0,console.log(this._id)})}storeDetails(r){let l;if(r==="stripe"){if(!this.Stripe.get("secreateKey")?.value||!this.Stripe.get("publicKey")?.value||this.Stripe.invalid){this._toastr.warning("Please fill the details/valid first","warning");return}l={objectType:"stripe",values:{secreateKey:this.Stripe.get("secreateKey")?.value,publicKey:this.Stripe.get("publicKey")?.value}}}else if(r==="twilio"){if(!this.Twilio.get("phoneNumber")?.value||!this.Twilio.get("authToken")?.value||!this.Twilio.get("sid")?.value||this.Twilio.invalid){this._toastr.warning("Please fill the details/valid first bro","warning");return}if(!this.validatePhone(this.Twilio.get("phoneNumber")?.value))return;l={objectType:"twilio",values:{sid:this.Twilio.get("sid")?.value,authToken:this.Twilio.get("authToken")?.value,phoneNumber:this.Twilio.get("phoneNumber")?.value}}}else if(r==="email"){if(!this.Email.get("email")?.value||!this.Email.get("password")?.value){this._toastr.warning("Please fill the details first","warning");return}if(!this.validateEmail(this.Email.get("email")?.value))return;console.log("broooooo"),l={objectType:"email",values:{email:this.Email.get("email")?.value,password:this.Email.get("password")?.value}}}this._settingService.storeKeys(l).pipe(O(o=>(this._toastr.error(o,"error"),N(o)))).subscribe({next:o=>{o.status==200&&this._toastr.success("Data Stored successfully","success")}})}storeSetting(){if(!this.Setting.get("stops")?.value||!this.Setting.get("timeOut")?.value){this._toastr.warning("Please select the settings first","warning");return}if(this.cuttentSetting&&this.cuttentSetting.Stops==this.Setting.get("stops")?.value&&this.cuttentSetting.TimeOut==this.Setting.get("timeOut")?.value){this._toastr.info("No chages Detected","Info");return}console.log(this.Setting.value),console.log(this.Setting.get("timeOut")?.value);let r={_id:this._id,timeOut:this.Setting.get("timeOut")?.value,stops:this.Setting.get("stops")?.value};this._http.post("http://localhost:5000/setting",r).pipe(K(l=>{this._id=l._id,this._toastr.success("Setting updated successfully","Success"),console.log(l),l&&(this.Setting.get("timeOut").setValue(l.TimeOut),this.Setting.get("stops").setValue(l.Stops),this.cuttentSetting&&(console.log("inside here--->"),this.cuttentSetting.TimeOut=l.TimeOut,this.cuttentSetting.Stops=l.Stops))})).subscribe()}getAllKeys(){this._settingService.getAllKeys().pipe(O(r=>(this._toastr.error(r,"error"),N(r)))).subscribe({next:r=>{r.status==200&&(this._toastr.success("Data fetched successfully","success"),console.log("get all keys",r),r.data.forEach(l=>{l.objectType==="email"?this.Email.patchValue({email:l.keyValues.email,password:l.keyValues.password}):l.objectType==="twilio"?this.Twilio.patchValue({sid:l.keyValues.sid,phoneNumber:l.keyValues.phoneNumber,authToken:l.keyValues.authToken}):l.objectType==="stripe"&&this.Stripe.patchValue({publicKey:l.keyValues.publicKey,secreateKey:l.keyValues.secreateKey})}))}})}get timeOut(){return this.Setting.get("timeOut")}get stops(){return this.Setting.get("stops")}validateEmail(r){console.log("inside the validateemail",r);let l=/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/,o=r;return console.log("email invalid",this.Email.invalid),l.test(o)?!0:(this._toastr.error("Invalid email address","Error"),!1)}validatePhone(r){let l=/^[1-9]\d{9}$/,o=r;return l.test(o)?!0:(this._toastr.error("Invalid phone number","Error"),!1)}};s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=V({type:s,selectors:[["app-setting"]],standalone:!0,features:[L],decls:104,vars:13,consts:[["seletedSeconds",""],["seletedStops",""],[1,"row"],[1,"container","mt-3","border-right","col","col-xxl-6","col-xl-6","col-lg-12","col-md-12","col-sm-12","col-xs-12","col-12"],[1,"text-primary"],[3,"submit","formGroup"],[1,"table"],["name","timeOut","id","timeOut","formControlName","timeOut",1,"mt-2","form-select","border-primary"],[1,"my-2"],["name","stops","id","stops","formControlName","stops",1,"mt-2","form-select","border-primary"],["type","submit",1,"btn","my-3","btn-primary","form-control"],[1,"container","mt-3","col","col-xxl-6","col-xl-6","col-lg-12","col-md-12","col-sm-12","col-xs-12","col-12"],[1,"text-success"],[1,"mt-3",3,"submit","formGroup"],["type","password","name","secreateKey","id","secreateKey","formControlName","secreateKey",1,"mt-1","form-control","border-success"],["type","text","name","publicKey","id","publicKey","formControlName","publicKey",1,"form-control","mt-1","border-success"],["type","submit",1,"btn","my-3","btn-success","form-control"],[1,"text-danger"],["type","text","name","sid","id","sid","formControlName","sid",1,"mt-1","form-control","border-danger"],["type","password","name","authToken","id","authToken","formControlName","authToken",1,"mt-1","form-control","border-danger"],["type","text","name","phoneNumber","id","phoneNumber","formControlName","phoneNumber",1,"mt-1","form-control","border-danger"],["type","submit",1,"btn","my-3","btn-danger","form-control"],[1,"text-warning"],[1,"mt-2",3,"submit","formGroup"],["type","text","name","email","id","email","formControlName","email",1,"mt-1","form-control","border-warning"],["type","password","name","password","id","password","formControlName","password",1,"form-control","mt-1","border-warning"],["type","submit",1,"btn","my-3","btn-warning","form-control"],["value","10",3,"selected"],["value","20",3,"selected"],["value","30",3,"selected"],["value","45",3,"selected"],["value","60",3,"selected"],["value","90",3,"selected"],["value","120",3,"selected"],["value","10"],["value","20"],["value","30"],["value","45"],["value","60"],["value","90"],["value","120"],["value","1",3,"selected"],["value","2",3,"selected"],["value","3",3,"selected"],["value","4",3,"selected"],["value","5",3,"selected"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"]],template:function(l,o){if(l&1){let h=k();e(0,"div")(1,"div",2)(2,"div",3)(3,"h3",4),t(4,"Ride Settings"),n(),e(5,"form",5),v("submit",function(){return x(h),b(o.storeSetting())}),e(6,"table",6)(7,"tr")(8,"th"),t(9,"Seconds for the driver to accept the Request:"),n()(),e(10,"tr")(11,"td")(12,"select",7,0),c(14,$,14,7)(15,z,14,0),n()()(),d(16,"br"),e(17,"tr",8)(18,"th"),t(19,"Number of Stops:"),n()(),e(20,"tr")(21,"td")(22,"select",9,1),c(24,Z,10,5)(25,J,10,0),n()()()(),e(26,"button",10),t(27,"Update"),n()()(),e(28,"div",11)(29,"h3",12),t(30,"Stripe Keys"),n(),e(31,"form",13),v("submit",function(){return x(h),b(o.storeDetails("stripe"))}),e(32,"table",6)(33,"tr")(34,"th"),t(35,"Stripe Secreate Key:"),n()(),e(36,"tr")(37,"td"),d(38,"input",14),c(39,ee,3,3),n()(),d(40,"br"),e(41,"tr",8)(42,"th"),t(43,"Stripe Public key:"),n()(),e(44,"tr")(45,"td"),d(46,"input",15),c(47,le,3,3),n()()(),e(48,"button",16),t(49,"Update"),n()()()(),d(50,"hr"),e(51,"div",2)(52,"div",3)(53,"h3",17),t(54,"Twilio Cradentials"),n(),e(55,"form",5),v("submit",function(){return x(h),b(o.storeDetails("twilio"))}),e(56,"table",6)(57,"tr")(58,"th"),t(59,"TWILIO SID:"),n()(),e(60,"tr")(61,"td"),d(62,"input",18),c(63,se,3,3),n()(),d(64,"br"),e(65,"tr",8)(66,"th"),t(67,"TWILIO AUTH TOKEN:"),n()(),e(68,"tr")(69,"td"),d(70,"input",19),c(71,pe,3,3),n()(),d(72,"br"),e(73,"tr",8)(74,"th"),t(75,"TWILIO PHONE NUMBER:"),n()(),e(76,"tr")(77,"td"),d(78,"input",20),c(79,he,3,3),n()()(),e(80,"button",21),t(81,"Update"),n()()(),e(82,"div",11)(83,"h3",22),t(84,"Email Cradentials"),n(),e(85,"form",23),v("submit",function(){return x(h),b(o.storeDetails("email"))}),e(86,"table",6)(87,"tr")(88,"th"),t(89,"Email :"),n()(),e(90,"tr")(91,"td"),d(92,"input",24),c(93,fe,1,1),n()(),d(94,"br"),e(95,"tr",8)(96,"th"),t(97,"Password:"),n()(),e(98,"tr")(99,"td"),d(100,"input",25),c(101,be,1,1),n()()(),e(102,"button",26),t(103,"Update"),n()()()()()}if(l&2){let h,S,C,T,E,y,w;m(5),g("formGroup",o.Setting),m(9),u(14,o.cuttentSetting?14:15),m(10),u(24,o.cuttentSetting?24:25),m(7),g("formGroup",o.Stripe),m(8),u(39,(h=o.Stripe.get("secreateKey"))!=null&&h.errors&&((h=o.Stripe.get("secreateKey"))!=null&&h.touched)?39:-1),m(8),u(47,(S=o.Stripe.get("publicKey"))!=null&&S.errors&&((S=o.Stripe.get("publicKey"))!=null&&S.touched)?47:-1),m(8),g("formGroup",o.Twilio),m(8),u(63,(C=o.Twilio.get("sid"))!=null&&C.errors&&((C=o.Twilio.get("sid"))!=null&&C.touched)?63:-1),m(8),u(71,(T=o.Twilio.get("authToken"))!=null&&T.errors&&((T=o.Twilio.get("authToken"))!=null&&T.touched)?71:-1),m(8),u(79,(E=o.Twilio.get("phoneNumber"))!=null&&E.errors&&((E=o.Twilio.get("phoneNumber"))!=null&&E.touched)?79:-1),m(6),g("formGroup",o.Email),m(8),u(93,(y=o.Email.get("email"))!=null&&y.errors&&((y=o.Email.get("email"))!=null&&y.touched)?93:-1),m(8),u(101,(w=o.Email.get("email"))!=null&&w.errors&&((w=o.Email.get("email"))!=null&&w.touched)?101:-1)}},dependencies:[H,I,F,R,q,j,M,D,G,A],styles:[".line[_ngcontent-%COMP%]{border-right:1ps solid black}"]});let i=s;return i})();export{ke as SettingComponent};