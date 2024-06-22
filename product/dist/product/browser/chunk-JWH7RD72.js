import{a as te}from"./chunk-3PGCH5HT.js";import{a as ne}from"./chunk-QL6P3UXK.js";import{a as ie}from"./chunk-5W2BA5PI.js";import{b as A,d as p,g as L,h as $,j,k as G,m as R,n as z,o as H,p as K,q as W,r as Y,s as Z,t as J,u as Q}from"./chunk-HEVKUVIP.js";import{b as O,h as X,j as ee}from"./chunk-PFQXAC2Q.js";import{Ab as D,Db as x,E as M,Fb as u,Kb as V,Pb as F,Qb as r,Rb as g,Sb as T,Ta as l,Tb as I,V as w,Y as B,Yb as k,ca as P,ha as q,hb as s,mb as f,o as N,pa as v,qa as y,qb as c,sb as U,tb as b,ub as E,vb as i,wb as t,xb as _}from"./chunk-5BOCFAQI.js";var re=(()=>{let o=class o{storePricing(d){return this._http.post(`${this.backendUrl}pricing/add`,d)}constructor(){this._http=P(O),this.backendUrl=ee.BACKEND_URL}getAllPricing(){return this._http.get(`${this.backendUrl}pricing/fetch`)}updatePrice(d){return this._http.post(`${this.backendUrl}pricing/update`,d)}};o.\u0275fac=function(m){return new(m||o)},o.\u0275prov=B({token:o,factory:o.\u0275fac,providedIn:"root"});let e=o;return e})();function oe(){return e=>{let o=e.value;return o==null||isNaN(o)?{invalidNumber:!0}:o<1||o>100?{outOfRange:!0}:(o.toString().match(/\./g)||[]).length>1?{multipleDecimalPoints:!0}:null}}var le=(e,o)=>o.countryName;function ce(e,o){return this.types}function de(e,o){if(e&1&&(i(0,"option",9),r(1),t()),e&2){let n=o.$implicit;V("value","",n._id,"+",n.country,""),l(),g(n.country)}}function me(e,o){e&1&&(i(0,"span",62),r(1,"Country is required."),t())}function se(e,o){if(e&1&&s(0,me,2,0,"span",62),e&2){let n=u();c(0,n.countryID.errors!=null&&n.countryID.errors.required?0:-1)}}function pe(e,o){if(e&1&&(i(0,"option",9),r(1),t()),e&2){let n=o.$implicit;V("value","",n._id,"+",n.formatted_address,""),l(),T("",n.formatted_address," ")}}function ue(e,o){e&1&&(i(0,"span",62),r(1,"City is required."),t())}function _e(e,o){if(e&1&&s(0,ue,2,0,"span",62),e&2){let n=u();c(0,n.cityID.errors!=null&&n.cityID.errors.required?0:-1)}}function he(e,o){if(e&1&&(i(0,"option",9),r(1),t()),e&2){let n=o.$implicit;V("value","",n._id,"+",n.vehicleType,""),l(),g(n.vehicleType)}}function Pe(e,o){e&1&&(i(0,"span",62),r(1,"Type is required."),t())}function fe(e,o){if(e&1&&s(0,Pe,2,0,"span",62),e&2){let n=u();c(0,n.typeID.errors!=null&&n.typeID.errors.required?0:-1)}}function ge(e,o){e&1&&(i(0,"span",62),r(1,"Driver Profit required."),t())}function ve(e,o){e&1&&(i(0,"span",62),r(1,"Negative values are not allowed."),t())}function ye(e,o){e&1&&(i(0,"span",62),r(1,"Percentage can't be more than 100."),t())}function xe(e,o){e&1&&(i(0,"span",62),r(1,"must have single point(.)."),t())}function Ce(e,o){if(e&1&&s(0,ge,2,0,"span",62)(1,ve,2,0,"span",62)(2,ye,2,0,"span",62)(3,xe,2,0,"span",62),e&2){let n=u();c(0,n.driverProfit.errors!=null&&n.driverProfit.errors.required?0:-1),l(),c(1,n.driverProfit.errors!=null&&n.driverProfit.errors.min?1:-1),l(),c(2,n.driverProfit.errors!=null&&n.driverProfit.errors.outOfRange?2:-1),l(),c(3,n.driverProfit.errors!=null&&n.driverProfit.errors.multipleDecimalPoints?3:-1)}}function Se(e,o){e&1&&(i(0,"span",62),r(1,"Min. Fare is required."),t())}function be(e,o){e&1&&(i(0,"span",62),r(1,"Negative values are not allowed."),t())}function Ee(e,o){if(e&1&&s(0,Se,2,0,"span",62)(1,be,2,0,"span",62),e&2){let n=u();c(0,n.minFare.errors!=null&&n.minFare.errors.required?0:-1),l(),c(1,n.minFare.errors!=null&&n.minFare.errors.min?1:-1)}}function Te(e,o){e&1&&(i(0,"span",63),r(1,"Distance for Base Price is required."),t())}function Ie(e,o){e&1&&(i(0,"span",62),r(1,"Negative values are not allowed."),t())}function Ve(e,o){if(e&1&&s(0,Te,2,0,"span",63)(1,Ie,2,0,"span",62),e&2){let n=u();c(0,n.distanceForBasePrice.errors!=null&&n.distanceForBasePrice.errors.required?0:-1),l(),c(1,n.distanceForBasePrice.errors!=null&&n.distanceForBasePrice.errors.min?1:-1)}}function Fe(e,o){e&1&&(i(0,"span",62),r(1,"Base Price is required."),t())}function Ue(e,o){e&1&&(i(0,"span",62),r(1,"Negative values are not allowed."),t())}function De(e,o){if(e&1&&s(0,Fe,2,0,"span",62)(1,Ue,2,0,"span",62),e&2){let n=u();c(0,n.basePrice.errors!=null&&n.basePrice.errors.required?0:-1),l(),c(1,n.basePrice.errors!=null&&n.basePrice.errors.min?1:-1)}}function Ne(e,o){e&1&&(i(0,"span",62),r(1,"Price Per Unit Distance is required."),t())}function Me(e,o){e&1&&(i(0,"span",62),r(1,"Negative values are not allowed."),t())}function we(e,o){if(e&1&&s(0,Ne,2,0,"span",62)(1,Me,2,0,"span",62),e&2){let n=u();c(0,n.pricePerUnitDistance.errors!=null&&n.pricePerUnitDistance.errors.required?0:-1),l(),c(1,n.pricePerUnitDistance.errors!=null&&n.pricePerUnitDistance.errors.min?1:-1)}}function Be(e,o){e&1&&(i(0,"span",62),r(1,"Price Per Unit Time required."),t())}function qe(e,o){e&1&&(i(0,"span",62),r(1,"Negative values are not allowed."),t())}function ke(e,o){if(e&1&&s(0,Be,2,0,"span",62)(1,qe,2,0,"span",62),e&2){let n=u();c(0,n.pricePerUnitTime_Min.errors!=null&&n.pricePerUnitTime_Min.errors.required?0:-1),l(),c(1,n.pricePerUnitTime_Min.errors!=null&&n.pricePerUnitTime_Min.errors.min?1:-1)}}function Oe(e,o){e&1&&(i(0,"span",62),r(1,"Max Space required."),t())}function Ae(e,o){e&1&&(i(0,"span",62),r(1,"Negative values are not allowed."),t())}function Le(e,o){if(e&1&&s(0,Oe,2,0,"span",62)(1,Ae,2,0,"span",62),e&2){let n=u();c(0,n.maxSpace.errors!=null&&n.maxSpace.errors.required?0:-1),l(),c(1,n.maxSpace.errors!=null&&n.maxSpace.errors.min?1:-1)}}function $e(e,o){if(e&1){let n=D();i(0,"tr",39)(1,"td",64),r(2),t(),i(3,"td",64),r(4),t(),i(5,"td",64),r(6),t(),i(7,"td",64),r(8),t(),i(9,"td",64),r(10),t(),i(11,"td",64),r(12),t(),i(13,"td",64),r(14),t(),i(15,"td",64),r(16),t(),i(17,"td",64),r(18),t(),i(19,"td",64),r(20),t(),i(21,"td")(22,"button",65),x("click",function(){let m=v(n).$implicit,a=u();return y(a.editBtnClicked(m))}),r(23,"Edit"),t()()()}if(e&2){let n=o.$implicit;l(2),g(n.countryId.country),l(2),T("",n.cityId.formatted_address," "),l(2),g(n.typeId.vehicleType),l(2),I("",n.pricePerUnitDistance," ",n.countryId.currency,""),l(2),I("",n.pricePerUnitTime_Min," ",n.countryId.currency,""),l(2),I("",n.minFare," ",n.countryId.currency,""),l(2),I("",n.basePrice," ",n.countryId.currency,""),l(2),T("",n.driverProfit," %"),l(2),T("",n.distanceForBasePrice," km"),l(2),g(n.maxSpace)}}function je(e,o){e&1&&(i(0,"span",66),r(1,"Negative values are not allowed."),t())}function Ge(e,o){if(e&1&&s(0,je,2,0,"span",66),e&2){let n=u();c(0,!(n.driverProfit2==null||n.driverProfit2.errors==null)&&n.driverProfit2.errors.min?0:-1)}}function Re(e,o){e&1&&(i(0,"span",66),r(1,"Negative values are not allowed."),t())}function ze(e,o){if(e&1&&s(0,Re,2,0,"span",66),e&2){let n=u();c(0,!(n.minFare2==null||n.minFare2.errors==null)&&n.minFare2.errors.min?0:-1)}}function He(e,o){e&1&&(i(0,"span",66),r(1,"Negative values are not allowed."),t())}function Ke(e,o){if(e&1&&s(0,He,2,0,"span",66),e&2){let n=u();c(0,!(n.distanceForBasePrice2==null||n.distanceForBasePrice2.errors==null)&&n.distanceForBasePrice2.errors.min?0:-1)}}function We(e,o){e&1&&(i(0,"span",66),r(1,"Negative values are not allowed."),t())}function Ye(e,o){if(e&1&&s(0,We,2,0,"span",66),e&2){let n=u();c(0,!(n.basePrice2==null||n.basePrice2.errors==null)&&n.basePrice2.errors.min?0:-1)}}function Ze(e,o){e&1&&(i(0,"span",66),r(1,"Negative values are not allowed."),t())}function Je(e,o){if(e&1&&s(0,Ze,2,0,"span",66),e&2){let n=u();c(0,!(n.pricePerUnitDistance2==null||n.pricePerUnitDistance2.errors==null)&&n.pricePerUnitDistance2.errors.min?0:-1)}}function Qe(e,o){e&1&&(i(0,"span",66),r(1,"Negative values are not allowed."),t())}function Xe(e,o){if(e&1&&s(0,Qe,2,0,"span",66),e&2){let n=u();c(0,!(n.pricePerUnitTime_Min2==null||n.pricePerUnitTime_Min2.errors==null)&&n.pricePerUnitTime_Min2.errors.min?0:-1)}}function et(e,o){e&1&&(i(0,"span",66),r(1,"Negative values are not allowed."),t())}function tt(e,o){if(e&1&&s(0,et,2,0,"span",66),e&2){let n=u();c(0,!(n.maxSpace2==null||n.maxSpace2.errors==null)&&n.maxSpace2.errors.min?0:-1)}}var vt=(()=>{let o=class o{constructor(){this._CountryService=P(ie),this._cityService=P(ne),this._vehicleTypeService=P(te),this._pricingService=P(re),this._fb=P(Z),this._toastr=P(X),this.Pricing=this._fb.group({countryId:["",p.required],cityId:["",p.required],typeId:["",p.required],driverProfit:[,[p.required,p.min(0),oe()]],minFare:[,[p.required,p.min(0)]],distanceForBasePrice:[,[p.required,p.min(0)]],basePrice:[,[p.required,p.min(0)]],pricePerUnitDistance:[,[p.required,p.min(0)]],pricePerUnitTime_Min:[,[p.required,p.min(0)]],maxSpace:[,[p.required,p.min(0)]]}),this.editPrice=this._fb.group({PriceId:[""],countryId:[""],cityId:[""],typeId:[""],driverProfit:[0,[p.min(0),p.required]],minFare:[0,[p.min(0),p.required]],distanceForBasePrice:[0,[p.min(0),p.required]],basePrice:[0,[p.min(0),p.required]],pricePerUnitDistance:[0,[p.min(0),p.required]],pricePerUnitTime_Min:[0,[p.min(0),p.required]],maxSpace:[0,[p.min(0),p.required]]})}isFieldInvalid(d){let m=this.Pricing.get(d);return m?.invalid&&(m?.dirty||m?.touched)}ngOnInit(){this._pricingService.getAllPricing().subscribe(d=>{this.PricingList=d,console.log(this.PricingList)}),this._CountryService.getCountry().subscribe(d=>{Array.isArray(d)&&(this.countryList=d),console.log(this.countryList)})}seletedC(d){this.Pricing.patchValue({cityId:null,typeId:null});let m=d.split("+");console.log(m[0]),console.log(m[1]),(this.countryName||this.countryId)&&(this.countryName=null,this.countryId=null),this.countryName=m[1],this.countryId=m[0],console.log(this.countryName),this._cityService.getCities(m[0]).subscribe(a=>{console.log(a),this.cityList=a})}seletedCities(d){let m=d.split("+"),a=m[1].split(",");(this.cityName||this.cityId)&&(this.cityName=null,this.cityId=null),this.cityName=a[0],this.cityId=m[0],this._vehicleTypeService.getAllVehicles("none").subscribe(h=>{this.types=h,console.log(this.types)})}selectedType(d){let m=d.split("+");(this.selectedVehicleType||this.typeId)&&(this.selectedVehicleType=null,this.typeId=null),this.typeId=m[0],this.selectedVehicleType=m[1],console.log(this.selectedVehicleType)}formSubmit(){if(console.log(this.Pricing),this.Pricing.valid){let d={vehicleType:this.selectedVehicleType,countryName:this.countryName,cityName:this.cityName,countryId:this.countryId,cityId:this.cityId,typeId:this.typeId,driverProfit:this.Pricing.get("driverProfit")?.value,minFare:this.Pricing.get("minFare")?.value,distanceForBasePrice:this.Pricing.get("distanceForBasePrice")?.value,basePrice:this.Pricing.get("basePrice")?.value,pricePerUnitDistance:this.Pricing.get("pricePerUnitDistance")?.value,pricePerUnitTime_Min:this.Pricing.get("pricePerUnitTime_Min")?.value,maxSpace:this.Pricing.get("maxSpace")?.value};this._pricingService.storePricing(d).subscribe(m=>{console.log(m),this.Pricing.reset(),this.PricingList.push(m),this._toastr.success("The Pricing data stored","Success")},m=>{console.log("some error occured",m),this._toastr.error("Dublicate entries not allowed","Error")})}else{Object.values(this.Pricing.controls).forEach(d=>{d.markAsTouched()}),this._toastr.warning("Please enter Valid/Your credentials","Warning");return}}editBtnClicked(d){console.log(d._id),this.editPrice.patchValue({PriceId:d._id,driverProfit:d.driverProfit,minFare:d.minFare,distanceForBasePrice:d.distanceForBasePrice,basePrice:d.basePrice,pricePerUnitDistance:d.pricePerUnitDistance,pricePerUnitTime_Min:d.pricePerUnitTime_Min,maxSpace:d.maxSpace,countryId:d.countryId._id,cityId:d.cityId._id,typeId:d.typeId._id}),this.country=d.countryId.country,this.city=d.cityId.formatted_address,this.type=d.typeId.vehicleType,console.log(d.maxSpace)}updateEditedPrice(){if(this.editPrice.invalid){this._toastr.warning("Please enter/valid credentials","warning");return}console.log("yoe");let d=this.editPrice.value;this._pricingService.updatePrice(d).pipe(w(m=>{console.log(m);let a=m,h=this.PricingList.findIndex(C=>C._id==a._id);this.PricingList[h]=m,this._toastr.success("Price Updated Successfully","Success"),this.editPrice.reset()}),M(m=>(this._toastr.error("The Zone already exists","Error"),N(m)))).subscribe()}get countryID(){return this.Pricing.get("countryId")}get cityID(){return this.Pricing.get("cityId")}get typeID(){return this.Pricing.get("typeId")}get driverProfit(){return this.Pricing.get("driverProfit")}get minFare(){return this.Pricing.get("minFare")}get distanceForBasePrice(){return this.Pricing.get("distanceForBasePrice")}get basePrice(){return this.Pricing.get("basePrice")}get pricePerUnitDistance(){return this.Pricing.get("pricePerUnitDistance")}get pricePerUnitTime_Min(){return this.Pricing.get("pricePerUnitTime_Min")}get maxSpace(){return this.Pricing.get("maxSpace")}get driverProfit2(){return this.editPrice.get("driverProfit")}get distanceForBasePrice2(){return this.editPrice.get("distanceForBasePrice")}get minFare2(){return this.editPrice.get("minFare")}get basePrice2(){return this.editPrice.get("basePrice")}get pricePerUnitDistance2(){return this.editPrice.get("pricePerUnitDistance")}get pricePerUnitTime_Min2(){return this.editPrice.get("pricePerUnitTime_Min")}get maxSpace2(){return this.editPrice.get("maxSpace")}};o.\u0275fac=function(m){return new(m||o)},o.\u0275cmp=q({type:o,selectors:[["app-vehicle-pricing"]],standalone:!0,features:[k],decls:257,vars:28,consts:[["seletedCountry",""],["seletedCity",""],["seletedT",""],[1,"d-flex","justify-content-center"],[1,"form",3,"submit","formGroup"],[1,""],[1,"row"],[1,"col","mb-5"],["name","country","id","country","formControlName","countryId",1,"mt-2","form-select",3,"change"],[3,"value"],["name","country","id","city","formControlName","cityId",1,"mt-2","form-select",3,"change"],["name","country","id","type","formControlName","typeId",1,"mt-2","form-select",3,"change"],[1,"col","my-2"],[1,"input-group","mb-2"],["type","number","formControlName","driverProfit","min","0",1,"form-control","border"],[1,"input-group-append","centered-container"],[1,"input-group-text","bg-secondary","text-white"],[1,"tooltip-container"],[1,"tooltip-text"],["type","number","formControlName","minFare","min","0","onkeypress","return event.charCode >= 48 && event.charCode <= 57",1,"form-control","border"],["type","number","formControlName","distanceForBasePrice","min","0","onkeypress","return event.charCode >= 48 && event.charCode <= 57",1,"form-control","border"],["type","number","formControlName","basePrice","min","0","onkeypress","return event.charCode >= 48 && event.charCode <= 57",1,"form-control","border"],["type","number","formControlName","pricePerUnitDistance","min","0",1,"form-control","border"],["type","number","formControlName","pricePerUnitTime_Min","min","0",1,"form-control","border"],["name","maxSpace","id","maxSpace","formControlName","maxSpace",1,"form-control"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],[1,"mb-3","d-flex"],["type","submit",1,"btn","my-3","me-4","btn-info","form-control"],[1,"btn","my-3","btn-warning","form-control",3,"click"],[1,"table-responsive"],[1,"table","table-striped","table-hover","border","hover"],[1,"table-dark"],[1,"text-center","bg-dark","text-white"],[1,"py-2","border"],[1,"border","text-center"],["id","editModal",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal",1,"btn-close"],[1,"container"],["id","editForm","enctype","multipart/form-data",3,"submit","formGroup"],[1,"table"],["name","country","id","country",1,"form-select-sm",2,"width","175px",3,"disabled"],["value","country",3,"disabled"],["type","number","id","driverProfit","formControlName","driverProfit","min","0",1,"form-control-sm","border","mt-1"],["type","number","id","minFare","formControlName","minFare","min","0",1,"form-control-sm","border","mt-1"],["type","number","id","distanceForBasePrice","formControlName","distanceForBasePrice","min","0",1,"form-control-sm","border","mt-1"],["type","number","id","basePrice","formControlName","basePrice","min","0",1,"form-control-sm","border","mt-1"],["type","number","id","pricePerUnitDistance","formControlName","pricePerUnitDistance","min","0",1,"form-control-sm","border","mt-1"],["type","number","id","pricePerUnitTime_Min","formControlName","pricePerUnitTime_Min","min","0",1,"form-control-sm","border","mt-1"],["type","number","id","maxSpace","formControlName","maxSpace","min","0",1,"form-control-sm","border","mt-1"],["colspan","2"],["type","submit","data-bs-dismiss","modal",1,"btn","form-control","mt-3","btn-warning"],[1,"modal-footer"],["data-bs-dismiss","modal",1,"btn","btn-secondary"],[1,"text-danger",2,"font-size","13px"],[1,"text-danger",2,"font-size","13px","display","inline"],[1,"py-1","border"],["data-bs-toggle","modal","data-bs-target","#editModal",1,"btn","btn-warning","btn-sm","px-3","my-2","me-1","edit","shadow",3,"click"],[1,"text-danger"]],template:function(m,a){if(m&1){let h=D();i(0,"div",3)(1,"form",4),x("submit",function(){return v(h),y(a.formSubmit())}),i(2,"table",5)(3,"div",6)(4,"div",7)(5,"tr")(6,"th"),r(7,"Country"),t(),i(8,"th")(9,"select",8,0),x("change",function(){v(h);let S=F(10);return y(a.seletedC(S.value))}),b(11,de,2,4,"option",9,le),t(),s(13,se,1,1),t()(),i(14,"tr")(15,"th"),r(16,"City"),t(),i(17,"th")(18,"select",10,1),x("change",function(){v(h);let S=F(19);return y(a.seletedCities(S.value))}),b(20,pe,2,4,"option",9,U),t(),s(22,_e,1,1),t()(),i(23,"tr")(24,"th"),r(25,"Type"),t(),i(26,"th")(27,"select",11,2),x("change",function(){v(h);let S=F(28);return y(a.selectedType(S.value))}),b(29,he,2,4,"option",9,ce,!0),t(),s(31,fe,1,1),t()()(),i(32,"div",12)(33,"tr")(34,"th"),r(35,"Driver Profit % :"),t(),i(36,"th")(37,"div",13),_(38,"input",14),i(39,"div",15)(40,"div",16),r(41,"?"),t(),i(42,"div",17)(43,"div",18),r(44,"The driver profit is the amount of money that a driver earns from their gross earnings."),t()()()(),s(45,Ce,4,4),t()(),i(46,"tr")(47,"th"),r(48,"Min. Fare"),t(),i(49,"th")(50,"div",13),_(51,"input",19),i(52,"div",15)(53,"div",16),r(54,"?"),t(),i(55,"div",17)(56,"div",18),r(57," The unit time price is the amount that a rider is charged for each minute that they spend in the vehicle during a ride."),t()()()(),s(58,Ee,2,2),t()(),i(59,"tr")(60,"th"),r(61,"Distance for Base Price"),t(),i(62,"th")(63,"div",13),_(64,"input",20),i(65,"div",15)(66,"div",16),r(67,"?"),t(),i(68,"div",17)(69,"div",18),r(70,"The base price distance is a predetermined distance that user can travel with base price."),t()()()(),s(71,Ve,2,2),t()(),i(72,"tr")(73,"th"),r(74,"Base Price"),t(),i(75,"th")(76,"div",13),_(77,"input",21),i(78,"div",15)(79,"div",16),r(80,"?"),t(),i(81,"div",17)(82,"div",18),r(83,"The base price is a predetermined amount that a rider is charged as soon as the ride starts."),t()()()(),s(84,De,2,2),t()(),i(85,"tr")(86,"th"),r(87,"Price Per Unit Distance"),t(),i(88,"th")(89,"div",13),_(90,"input",22),i(91,"div",15)(92,"div",16),r(93,"?"),t(),i(94,"div",17)(95,"div",18),r(96," The unit distance price is the amount that a rider is charged for each mile or kilometer traveled after base price distance."),t()()()(),s(97,we,2,2),t()(),i(98,"tr")(99,"th"),r(100,"Price Per Unit Time (min)"),t(),i(101,"th")(102,"div",13),_(103,"input",23),i(104,"div",15)(105,"div",16),r(106,"?"),t(),i(107,"div",17)(108,"div",18),r(109,"The unit time price is the amount that a rider is charged for each minute that they spend in the vehicle during a ride."),t()()()(),s(110,ke,2,2),t()(),i(111,"tr")(112,"th"),r(113,"Max Space"),t(),i(114,"th")(115,"div",13)(116,"select",24)(117,"option",25),r(118,"1"),t(),i(119,"option",26),r(120,"2"),t(),i(121,"option",27),r(122,"3"),t(),i(123,"option",28),r(124,"4"),t(),i(125,"option",29),r(126,"5"),t(),i(127,"option",30),r(128,"6"),t()(),i(129,"div",15)(130,"div",16),r(131,"?"),t(),i(132,"div",17)(133,"div",18),r(134,"The base price is a predetermined amount that a rider is charged as soon as the ride starts."),t()()()(),s(135,Le,2,2),t()()()()(),i(136,"div",31)(137,"button",32),r(138,"Add"),t(),i(139,"div",33),x("click",function(){return v(h),y(a.Pricing.reset())}),r(140,"clear"),t()()()(),i(141,"div",34)(142,"table",35)(143,"thead",36)(144,"tr",37)(145,"th",38),r(146,"Country"),t(),i(147,"th",38),r(148,"City"),t(),i(149,"th",38),r(150,"Vehicle Type"),t(),i(151,"th",38),r(152,"Price Per Unit Distance"),t(),i(153,"th",38),r(154,"Price Per Unit Time_Min"),t(),i(155,"th",38),r(156,"Min. Fare"),t(),i(157,"th",38),r(158,"Base Price"),t(),i(159,"th",38),r(160,"Driver Profit"),t(),i(161,"th",38),r(162,"Distance For Base Price"),t(),i(163,"th",38),r(164,"Max Space"),t(),i(165,"th",38),r(166,"edit"),t()()(),i(167,"tbody"),b(168,$e,24,14,"tr",39,U),t()()(),i(170,"div",40)(171,"div",41)(172,"div",42)(173,"div",43)(174,"h4",44),r(175,"Update Price"),t(),_(176,"button",45),t(),i(177,"div",46)(178,"form",47),x("submit",function(){return v(h),y(a.updateEditedPrice())}),i(179,"table",48)(180,"tr")(181,"td"),r(182,"Country:"),t(),i(183,"td")(184,"select",49)(185,"option",50),r(186),t()()()(),i(187,"tr")(188,"td"),r(189,"City:"),t(),i(190,"td")(191,"select",49)(192,"option",50),r(193),t()()()(),i(194,"tr")(195,"td"),r(196,"Type:"),t(),i(197,"td")(198,"select",49)(199,"option",50),r(200),t()()()(),i(201,"tr")(202,"td"),r(203,"Driver Profit:"),t(),i(204,"td"),_(205,"input",51)(206,"br"),s(207,Ge,1,1),t()(),i(208,"tr")(209,"td"),r(210,"Min Fare:"),t(),i(211,"td"),_(212,"input",52)(213,"br"),s(214,ze,1,1),t()(),i(215,"tr")(216,"td"),r(217,"Distance for Base Price:"),t(),i(218,"td"),_(219,"input",53)(220,"br"),s(221,Ke,1,1),t()(),i(222,"tr")(223,"td"),r(224,"Base Price:"),t(),i(225,"td"),_(226,"input",54)(227,"br"),s(228,Ye,1,1),t()(),i(229,"tr")(230,"td"),r(231,"Price per Unit Distance:"),t(),i(232,"td"),_(233,"input",55)(234,"br"),s(235,Je,1,1),t()(),i(236,"tr")(237,"td"),r(238,"Price per Unit Time (Min):"),t(),i(239,"td"),_(240,"input",56)(241,"br"),s(242,Xe,1,1),t()(),i(243,"tr")(244,"td"),r(245,"Max Space:"),t(),i(246,"td"),_(247,"input",57)(248,"br"),s(249,tt,1,1),t()(),i(250,"tr")(251,"td",58)(252,"button",59),r(253,"Update"),t()()()()()(),i(254,"div",60)(255,"button",61),r(256,"Close"),t()()()()()}m&2&&(l(),f("formGroup",a.Pricing),l(10),E(a.countryList),l(2),c(13,a.countryID!==null&&(a.countryID.touched||a.countryID.dirty)?13:-1),l(7),E(a.cityList),l(2),c(22,a.cityID!==null&&(a.cityID.touched||a.cityID.dirty)?22:-1),l(7),E(a.types),l(2),c(31,a.typeID!==null&&(a.typeID.touched||a.typeID.dirty)?31:-1),l(14),c(45,a.driverProfit!==null&&(a.driverProfit.touched||a.driverProfit.dirty)?45:-1),l(13),c(58,a.minFare!==null&&(a.minFare.touched||a.minFare.dirty)?58:-1),l(13),c(71,a.distanceForBasePrice!==null&&(a.distanceForBasePrice.touched||a.distanceForBasePrice.dirty)?71:-1),l(13),c(84,a.basePrice!==null&&(a.basePrice.touched||a.basePrice.dirty)?84:-1),l(13),c(97,a.pricePerUnitDistance!==null&&(a.pricePerUnitDistance.touched||a.pricePerUnitDistance.dirty)?97:-1),l(13),c(110,a.pricePerUnitTime_Min!==null&&(a.pricePerUnitTime_Min.touched||a.pricePerUnitTime_Min.dirty)?110:-1),l(25),c(135,a.maxSpace!==null&&(a.maxSpace.touched||a.maxSpace.dirty)?135:-1),l(33),E(a.PricingList),l(10),f("formGroup",a.editPrice),l(6),f("disabled",!0),l(),f("disabled",!0),l(),g(a.country),l(5),f("disabled",!0),l(),f("disabled",!0),l(),g(a.city),l(5),f("disabled",!0),l(),f("disabled",!0),l(),g(a.type),l(7),c(207,a.driverProfit2!=null&&a.driverProfit2.dirty?207:-1),l(7),c(214,a.minFare2!=null&&a.minFare2.dirty?214:-1),l(7),c(221,a.distanceForBasePrice2!=null&&a.distanceForBasePrice2.dirty?221:-1),l(7),c(228,a.basePrice2!=null&&a.basePrice2.dirty?228:-1),l(7),c(235,a.pricePerUnitDistance2!=null&&a.pricePerUnitDistance2.dirty?235:-1),l(7),c(242,a.pricePerUnitTime_Min2!=null&&a.pricePerUnitTime_Min2.dirty?242:-1),l(7),c(249,a.maxSpace2!=null&&a.maxSpace2.dirty?249:-1))},dependencies:[Q,j,K,W,A,G,H,L,$,Y,R,z,J],styles:['.edit[_ngcontent-%COMP%]{padding:3px;margin:4px}.parent[_ngcontent-%COMP%]{width:100%}.childdiv[_ngcontent-%COMP%]{width:50%}.centered-container[_ngcontent-%COMP%]{position:relative;cursor:pointer}.tooltip-container[_ngcontent-%COMP%]{position:absolute;bottom:125%;left:50%;transform:translate(-50%)}.tooltip-text[_ngcontent-%COMP%]{font-size:15px;display:none;background-color:#535252d9;color:#fff;padding:8px;border-radius:4px;z-index:1;white-space:nowrap;opacity:0;transition:opacity .3s ease-in-out}.centered-container[_ngcontent-%COMP%]:hover   .tooltip-text[_ngcontent-%COMP%]{display:block;opacity:1}.tooltip-text[_ngcontent-%COMP%]:before{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#333 transparent transparent transparent}']});let e=o;return e})();export{vt as VehiclePricingComponent};
