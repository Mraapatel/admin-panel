import{a as q}from"./chunk-2FE4SAN5.js";import{b as P,d as W,g as j,h as z,j as D,m as G,n as O,s as M,u as H}from"./chunk-HEVKUVIP.js";import{b as $,h as U}from"./chunk-NQZM5S6E.js";import{Ab as B,Db as f,E as I,Fb as k,Pb as w,Qa as _,Qb as n,Rb as u,Ta as r,V,Yb as Z,ca as g,ha as A,hb as N,mb as b,p as T,pa as h,qa as p,qb as F,sb as S,tb as v,ub as E,vb as t,wb as e,xb as C}from"./chunk-5BOCFAQI.js";function R(a,c){if(a&1&&(t(0,"tr",38)(1,"td",37)(2,"b")(3,"span"),n(4),e()()(),t(5,"td",37)(6,"span"),n(7),e()(),t(8,"td",37)(9,"span"),n(10),e()(),t(11,"td",37)(12,"span"),n(13),e()(),t(14,"td",39),C(15,"img",40),e(),t(16,"td",37)(17,"span"),n(18),e()()()),a&2){let o=c.$implicit;r(4),u(o.country),r(3),u(o.currency),r(3),u(o.countryCode),r(3),u(o.countryCallingCode),r(2),b("src",o.flagSymbol,_),r(3),u(o.timeZone)}}function J(a,c){if(a&1&&(t(0,"h2"),n(1,"Serched Countries"),e(),t(2,"div",34)(3,"table",35)(4,"tr",36)(5,"th",37),n(6,"Country Name"),e(),t(7,"th",37),n(8,"Currency"),e(),t(9,"th",37),n(10,"Country Code"),e(),t(11,"th",37),n(12,"Country Calling Code "),e(),t(13,"th",37),n(14,"Country Flag"),e(),t(15,"th",37),n(16,"Country TimeZone"),e()(),v(17,R,19,6,"tr",38,S),e()()),a&2){let o=k();r(17),E(o.serchedCountries)}}function K(a,c){if(a&1&&(t(0,"tr",38)(1,"td",37)(2,"b")(3,"span"),n(4),e()()(),t(5,"td",37)(6,"span"),n(7),e()(),t(8,"td",37)(9,"span"),n(10),e()(),t(11,"td",37)(12,"span"),n(13),e()(),t(14,"td",39),C(15,"img",40),e(),t(16,"td",37)(17,"span"),n(18),e()()()),a&2){let o=c.$implicit;r(4),u(o.country),r(3),u(o.currency),r(3),u(o.countryCode),r(3),u(o.countryCallingCode),r(2),b("src",o.flagSymbol,_),r(3),u(o.timeZone)}}function Q(a,c){if(a&1&&(t(0,"h2",41),n(1,"List of Countries"),e(),t(2,"div",42)(3,"table",35)(4,"tr",36)(5,"th",37),n(6,"Country Name"),e(),t(7,"th",37),n(8,"Currency"),e(),t(9,"th",37),n(10,"Country Code"),e(),t(11,"th",37),n(12,"Country Calling Code "),e(),t(13,"th",37),n(14,"Country Flag"),e(),t(15,"th",37),n(16,"Country TimeZone"),e()(),v(17,K,19,6,"tr",38,S),e()()),a&2){let o=k();r(17),E(o.Countries)}}var de=(()=>{let c=class c{constructor(){this._toaster=g(U),this._fb=g(M),this._http=g($),this._addCountry=g(q),this.Countries=[],this.serchedCountries=[],this.serched=!1,this.regEx=/^[a-zA-Z0-9\s]*$/,this.Country=this._fb.group({country:["",W.required],currency:[{value:"",disabled:!0}],countryCode:[{value:"",disabled:!0}],countryCallingCode:[{value:"",disabled:!0}]})}ngOnInit(){this._addCountry.getCountry().subscribe(l=>{this.Countries=l,console.log(this.Countries)})}serchCountry(){if(this.Country.valid){console.log("serchmehro");let l=this.Country.get("country").value;this._http.get(`https://restcountries.com/v3.1/name/${l}?fullText=true`).pipe(V(i=>{this.Country.get("country")?.disable()}),I(i=>(console.error("An error occurred:",i),this._toaster.warning("Please Try specifying full name","Warning"),this.Country.reset(),T("Please Try specifying full name")))).subscribe(i=>{console.log(i);let d=Object.keys(i[0].currencies)[0],s=i[0].name.common,m=i[0].cca3,y,x=i[0].idd.root;if(i[0].idd.suffixes.length==1){let L=i[0].idd.suffixes[0];y=`${x}${L}`}else y=`${x}`;this.timeZone=i[0].timezones[0],this.flagSymbol=i[0].flags.png,this.countryCode2=i[0].cca2,this.checkCountry=s,this.checkCurrency=d,this.checkCountryCallingCode=y,this.checkCountryCode=m,this.Country.patchValue({country:s,currency:d,countryCallingCode:y,countryCode:m})})}else{if(this.checkCountry){this._toaster.warning("Please change Country after submitting","Warning");return}this._toaster.warning("Please enter Some value first","Warning");return}}clearSerchBar(){this.Country.get("country")?.setValue(""),this.Country.get("country")?.enable(),this.checkCountry="",this.Country.reset()}dissableFields(){Object.keys(this.Country.controls).forEach(l=>{this.Country.get(l)?.disable()})}addCountry(){let l=!1,i=this.Country.get("currency").value,d=this.Country.get("country").value,s=this.Country.get("countryCode").value,m=this.Country.get("countryCallingCode").value;if(this.checkCountry===d&&this.checkCurrency===i&&this.checkCountryCallingCode===m&&this.checkCountryCode===s){if(this.Countries.forEach(x=>{x.country===d&&(console.log("condition true-----------------------------"),this._toaster.warning("The Enterd Country Exist already","Warning"),this.clearSerchBar(),l=!0)}),l){this.Country.reset();return}let y={currency:i,country:d,countryCode:s,countryCallingCode:m,timeZone:this.timeZone,flagSymbol:this.flagSymbol,countryCode2:this.countryCode2};console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"),console.log(this.countryCode2),this.addCountryToServer(y)}else{this._toaster.warning("Please don't modify the suggested entries","Warning"),this.Country.patchValue({country:this.checkCountry,currency:this.checkCurrency,countryCallingCode:this.checkCountryCallingCode,countryCode:this.checkCountryCode}),this.dissableFields();return}}addCountryToServer(l){console.log("data going to be stored",l),this._addCountry.addCountry(l).subscribe(i=>{this.Countries.push(i),this.Country.reset(),this.serched=!1,this._toaster.success("Country added successfully ","Sucess")})}serch(l){if(l.trim()==""){this._toaster.info("showing main table","info"),this._toaster.error("Please enter some value","error"),this.serched=!1;return}if(!this.regEx.test(l)){this._toaster.warning("Only alphanumeric characters and spaces are allowed","warning");return}this._addCountry.serchCountries(l.trim()).subscribe(i=>{if(this.serchedCountries=i,this.serchedCountries.length<-1||this.serchedCountries.length==0){this.serched=!1,this._toaster.warning("No such matching data found","Warning");return}this.serched=!0,console.log(this.serchedCountries)})}};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=A({type:c,selectors:[["app-add-country"]],standalone:!0,features:[Z],decls:56,vars:3,consts:[["CountryTag",""],["serchInput",""],["id","mymodal",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal",1,"btn-close"],[1,"container"],["id","countryForm","enctype","multipart/form-data",3,"submit","formGroup"],[1,"mb-3"],["for","country",1,"form-label"],["type","text","id","country","name","country","placeholder","enter your country","formControlName","country",1,"form-control"],[1,"d-flex","flex-row"],[1,"mt-2","mx-2","btn","btn-info","form-control",3,"click"],[1,"mt-2","mx-2","btn","btn-warning","form-control",3,"click"],["for","currency",1,"form-label"],["type","readonly","accept","image/*","id","currency","name","currency","placeholder","currency","formControlName","currency","readonly","",1,"form-control"],["for","countryCode",1,"form-label"],["type","readonly","accept","image/*","id","countryCode","name","countryCode","placeholder","country Code","formControlName","countryCode","readonly","",1,"form-control"],["for","countryCallingCode",1,"form-label"],["type","readonly","accept","image/*","id","countryCallingCode","name","countryCallingCode","placeholder","country Calling Code","formControlName","countryCallingCode","readonly","",1,"form-control"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-info","form-control",3,"disabled"],[1,"modal-footer"],["data-bs-dismiss","modal",1,"btn","btn-secondary"],[1,"my-3"],[1,"input-group","mb-2"],[1,"form-control",3,"keyup.enter"],[1,"input-group-append"],[1,"input-group-text","bg-dark","text-white"],[1,"btn","btn-info","mt-2",3,"click"],[1,"text-center","my-3"],["data-bs-toggle","modal","data-bs-target","#mymodal",1,"btn","btn-info","form-control"],[1,""],[1,"listBox","container"],[1,"table","border"],[1,"border"],[1,"text-center"],[1,"mb-5","border-bottom"],[1,"ns","m-1","text-center"],["alt","not found","onerror","this.src='assets/noImageFound.jpg'","height","40px","width","100px",1,"border","my-1","icons","rounded","img-fluid",2,"border-radius","5px",3,"src"],[1,"m-3","border-bottom"],[1,"listBox","container","table-responsive"]],template:function(i,d){if(i&1){let s=B();t(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"h4",6),n(6,"Add Country"),e(),C(7,"button",7),e(),t(8,"div",8)(9,"form",9),f("submit",function(){return h(s),p(d.addCountry())}),t(10,"div",10)(11,"label",11),n(12,"Country Name:"),e(),C(13,"input",12,0),t(15,"div",13)(16,"span",14),f("click",function(){return h(s),p(d.serchCountry())}),n(17,"Search"),e(),t(18,"span",15),f("click",function(){return h(s),p(d.clearSerchBar())}),n(19,"Clear"),e()()(),t(20,"div",10)(21,"label",16),n(22,"currency:"),e(),C(23,"input",17),e(),t(24,"div",10)(25,"label",18),n(26,"country Code:"),e(),C(27,"input",19),e(),t(28,"div",10)(29,"label",20),n(30,"country Calling Code:"),e(),C(31,"input",21),e(),t(32,"div",10)(33,"button",22),n(34,"Add"),e()()()(),t(35,"div",23)(36,"button",24),n(37,"Close"),e()()()()(),t(38,"div",25)(39,"label",20),n(40,"Search by Name:"),e(),t(41,"div",26)(42,"input",27,1),f("keyup.enter",function(){h(s);let y=w(43);return p(d.serch(y.value))}),e(),t(44,"div",28)(45,"div",29),n(46,"Hit Enter"),e()()(),t(47,"button",30),f("click",function(){h(s);let y=w(43);return p(d.serch(y.value))}),n(48,"Search"),e()(),t(49,"div",31)(50,"button",32),n(51,"Add Country type"),e()(),C(52,"hr"),t(53,"div",33),N(54,J,19,0)(55,Q,19,0),e()()}i&2&&(r(9),b("formGroup",d.Country),r(24),b("disabled",d.Country.invalid),r(21),F(54,d.serched?54:55))},dependencies:[H,D,P,j,z,G,O]});let a=c;return a})();export{de as AddCountryComponent};