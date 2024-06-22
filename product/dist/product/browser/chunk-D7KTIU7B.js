import{a as H}from"./chunk-3PGCH5HT.js";import{b as M,d as m,g as P,h as G,j as U,m as B,n as Q,s as R,u as W}from"./chunk-HEVKUVIP.js";import{h as $}from"./chunk-PFQXAC2Q.js";import{Ab as E,Db as g,E as x,Fb as b,Jb as z,Mb as O,Nb as k,Ob as q,Qa as I,Qb as n,Rb as A,Sb as j,Ta as s,V as C,Yb as L,ca as S,ha as w,hb as v,mb as u,o as V,pa as y,qa as _,qb as h,sb as N,tb as D,ub as F,vb as i,wb as t,xb as f}from"./chunk-5BOCFAQI.js";var K=["vehicleTable"];function X(o,c){o&1&&(i(0,"span",33),n(1,"Vehicle Name is required."),t())}function Y(o,c){o&1&&(i(0,"span",33),n(1,"Vehicle Name should be "),i(2,"b"),n(3,"2"),t(),n(4," character long."),t())}function Z(o,c){o&1&&(i(0,"span",33),n(1,"character execeded."),t())}function ee(o,c){if(o&1&&v(0,X,2,0,"span",33)(1,Y,5,0,"span",33)(2,Z,2,0,"span",33),o&2){let a=b();h(0,a.vehicleName.errors!=null&&a.vehicleName.errors.required?0:-1),s(),h(1,a.vehicleName.errors!=null&&a.vehicleName.errors.minlength?1:-1),s(),h(2,a.vehicleName.errors!=null&&a.vehicleName.errors.maxlength?2:-1)}}function te(o,c){o&1&&(i(0,"span",33),n(1,"file is required."),t(),f(2,"br"))}function ie(o,c){if(o&1&&v(0,te,3,0),o&2){let a=b();h(0,a.vehicleIcon.errors!=null&&a.vehicleIcon.errors.required?0:-1)}}function ne(o,c){o&1&&(i(0,"span",33),n(1,"vehicle name is required."),t())}function le(o,c){o&1&&(i(0,"span",33),n(1,"vehicle name should be "),i(2,"b"),n(3,"2"),t(),n(4," character long."),t())}function oe(o,c){o&1&&(i(0,"span",33),n(1,"character execeded."),t())}function re(o,c){if(o&1&&v(0,ne,2,0,"span",33)(1,le,5,0,"span",33)(2,oe,2,0,"span",33),o&2){let a=b();h(0,a.editVehicleType.errors!=null&&a.editVehicleType.errors.required?0:-1),s(),h(1,a.editVehicleType.errors!=null&&a.editVehicleType.errors.minlength?1:-1),s(),h(2,a.editVehicleType.errors!=null&&a.editVehicleType.errors.maxlength?2:-1)}}function ae(o,c){if(o&1){let a=E();i(0,"tr",32)(1,"td",31)(2,"span"),n(3),t()(),i(4,"td",34),f(5,"img",35),t(),i(6,"td",31)(7,"button",36),g("click",function(){let l=y(a).$implicit,e=b();return _(e.editClicked(l))}),n(8,"Edit"),t()()()}if(o&2){let a=c.$implicit;s(3),A(a.vehicleType),s(2),z("alt","",a.vehicleType," Icon"),u("src","http://localhost:5000/public/vehicleTypes/"+a.vehicleIcon,I)}}var ye=(()=>{let c=class c{constructor(){this._fb=S(R),this._vehicleTypeService=S(H),this._tostrService=S($),this.vehicles=[],this.isSizeOk=!0,this.isSizeOk2=!0,this.maxFileSize=2*1024*1024,this.extensions=["jpg","jpeg","png","gif","bmp","tiff","tif","webp","svg","avif"],this.validateImgeObj={extentions:["jpg","jpeg","png","gif","bmp","tiff","tif","webp","svg"],ValidateImage:this.ValidateImage},this.formData=new FormData,this.formData2=new FormData,this.vehicleType=this._fb.group({vehicleName:["",[m.required,m.minLength(2),m.maxLength(15)]],vehicleIcon:["",[m.required]]}),this.editVType=this._fb.group({vehicleName:["",[m.required,m.minLength(2),m.maxLength(15)]],vehicleIcon:[""]})}get vehicleName(){return this.vehicleType.get("vehicleName")}get vehicleIcon(){return this.vehicleType.get("vehicleIcon")}get editVehicleType(){return this.editVType.get("vehicleName")}get editVehicleIcon(){return this.editVType.get("vehicleIcon")}ngOnInit(){this.loadAllVehicles()}onFileSelected(r){this.formData.delete("vehicleIcon"),this.formData=new FormData;let l=r.target.files[0];if(l){let e=l.type.split("/").pop();if(console.log(e),!e||this.extensions.indexOf(e)===-1){this._tostrService.warning(`${e} type is not allowd`,"Warning"),this.vehicleType.get("vehicleIcon")?.reset();return}this.formData.delete("vehicleIcon"),this.formData.append("vehicleIcon",r.target.files[0]),this.fileSize=l.size}this.fileSize>this.maxFileSize?this.isSizeOk=!1:this.isSizeOk=!0}onFileSelected2(r){this.formData2.delete("vehicleIcon");let l=r.target.files[0];if(l){this.fileSize=l.size;let e=l.type.split("/").pop();if(console.log(e),!e||this.extensions.indexOf(e)===-1){this._tostrService.warning(`${e} type is not allowd`,"Warning"),this.editVType.get("vehicleIcon")?.reset();return}this.formData2.append("vehicleIcon",r.target.files[0])}this.fileSize>this.maxFileSize?this.isSizeOk2=!1:this.isSizeOk2=!0}addVehicleType(){if(this.vehicleType.invalid){this._tostrService.warning("Please fill the details first","Warning"),Object.values(this.vehicleType.controls).forEach(r=>{r.markAsTouched()});return}else if(!/\D/.test(this.vehicleType.get("vehicleName").value)){this._tostrService.warning("Only numbers are not allowed","Warning");return}if(this.fileSize<this.maxFileSize&&this.isSizeOk){let r=this.vehicleType.get("vehicleName").value;r!==null&&(this.formData.delete("vehicleType"),this.formData.append("vehicleType",r)),this._vehicleTypeService.addVechicleType(this.formData).pipe(C(l=>{this.addNewRow(l),this.vehicleType.reset(),this.formData=new FormData,this._tostrService.success("data added ","sucess")}),x(l=>(l.status===409?(this._tostrService.error("dublicate vehicle","Error"),this.formData.delete("vehicleType"),this.vehicleType.get("vehicleType")?.reset()):(this._tostrService.error("Some Error Occured","Error"),this.vehicleName?.reset(),this.formData=new FormData),console.log(l),V(l)))).subscribe()}else this.isSizeOk=!1,this._tostrService.warning("Please enter validate entries","warning")}loadAllVehicles(){this._vehicleTypeService.getAllVehicles("none").subscribe(l=>{Array.isArray(l)&&l.length===0?this.message="There are no current vehicles":(this.vehicles=l,console.log(this.vehicles))})}editClicked(r){this.selectedVehicle=r,this.selectedFile=r.vehicleIcon.slice(14),this.editVType.patchValue({vehicleName:r.vehicleType});let l=r._id;this.formData2.delete("_id"),this.formData2.append("_id",l)}editVehicle(){this.formData2.delete("vehicleName");let r=this.editVType.get("vehicleName").value,l=this.editVType.get("vehicleIcon").value;if(r==this.selectedVehicle.vehicleType&&l==null){this._tostrService.warning("No changes detected","warning");return}r!==null&&this.formData2.append("vehicleName",r),this._vehicleTypeService.editVehicleType(this.formData2).pipe(C(e=>{let d=e,T=d._id,p=this.vehicles.findIndex(J=>J._id===T);p!==-1&&(this.vehicles[p].vehicleIcon=d.vehicleIcon,this.vehicles[p].vehicleType=d.vehicleType),this.formData2=new FormData,this.editVType.reset(),this._tostrService.success("Type Updated","Sucess")}),x(e=>(e.status===409?(this._tostrService.error("dublicate vehicle","Error"),this.formData2=new FormData):this._tostrService.error("Some Error Occured","Error"),console.log(e),V(e)))).subscribe()}addNewRow(r){this.vehicles.push(r)}};c.\u0275fac=function(l){return new(l||c)},c.\u0275cmp=w({type:c,selectors:[["app-vehicle-type"]],viewQuery:function(l,e){if(l&1&&O(K,5),l&2){let d;k(d=q())&&(e.table=d.first)}},standalone:!0,features:[L],decls:82,vars:9,consts:[["vehicleTable",""],["id","mymodal",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal",1,"btn-close"],[1,"container"],["id","vehicleForm","enctype","multipart/form-data",3,"submit","formGroup"],[1,"mb-3"],["for","vehicleName",1,"form-label"],["type","text","id","vehicleName","name","vehicleName","placeholder","enter your vehicleName","formControlName","vehicleName",1,"form-control"],["for","vehicleIcon",1,"form-label"],["type","file","accept","image/*","id","vehicleIcon","name","vehicleIcon","placeholder","choose icon","formControlName","vehicleIcon",1,"form-control","text-danger",3,"change"],[1,"text-danger",3,"hidden"],["type","submit",1,"btn","btn-info"],[1,"modal-footer"],["data-bs-dismiss","modal",1,"btn","btn-secondary"],[1,"text-center","my-3"],["data-bs-toggle","modal","data-bs-target","#mymodal",1,"btn","btn-info","form-control"],["id","editForm",1,"modal","fade"],[1,"mb-3","mt-2"],["type","file","accept","image/*","id","vehicleIcon","name","vehicleIcon","placeholder","choose icon","formControlName","vehicleIcon",1,"form-control",3,"change"],[1,"text-info"],[1,"text-primary"],["type","submit",1,"btn","btn-warning",3,"disabled"],[1,""],[1,"m-3","border-bottom"],[1,"listBox","py-3"],[1,"overflow-auto","vehicleList","table","border"],[1,"border"],[1,"text-center"],[1,"mb-5","border-bottom"],[1,"text-danger"],[1,"ns","m-1","text-center"],["onerror","this.src='assets/noImageFound.jpg'",1,"my-1","border","icons","rounded","img-fluid",3,"src","alt"],["data-bs-toggle","modal","data-bs-target","#editForm",1,"btn","btn-warning","px-3",3,"click"]],template:function(l,e){if(l&1){let d=E();i(0,"div")(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),n(6,"Add Vehicle Type"),t(),f(7,"button",6),t(),i(8,"div",7)(9,"form",8),g("submit",function(){return y(d),_(e.addVehicleType())}),i(10,"div",9)(11,"label",10),n(12,"vehicle Name:"),t(),f(13,"input",11),v(14,ee,3,3),t(),i(15,"div",9)(16,"label",12),n(17,"vehicle Icon:"),t(),i(18,"input",13),g("change",function(p){return y(d),_(e.onFileSelected(p))}),t(),v(19,ie,1,1),i(20,"span",14),n(21,"file size must be less then "),i(22,"b"),n(23,"2 mb"),t(),n(24,"."),t()(),i(25,"div",9)(26,"button",15),n(27,"Add"),t()()()(),i(28,"div",16)(29,"button",17),n(30,"Close"),t()()()()(),i(31,"div",18)(32,"button",19),n(33,"Add vehicle type"),t()(),i(34,"div",20)(35,"div",2)(36,"div",3)(37,"div",4)(38,"h4",5),n(39,"Update Vehicle Type"),t(),f(40,"button",6),t(),i(41,"div",7)(42,"form",8),g("submit",function(){return y(d),_(e.editVehicle())}),i(43,"div",21)(44,"label",10),n(45,"Update vehicle Type :"),t(),f(46,"input",11),v(47,re,3,3),t(),i(48,"div",9)(49,"label",12),n(50,"Choose New Icon :"),t(),i(51,"input",22),g("change",function(p){return y(d),_(e.onFileSelected2(p))}),t(),i(52,"p",23),n(53,"Previously uploaded :"),i(54,"b",24),n(55),t()(),i(56,"span",14),n(57,"file size must be less then "),i(58,"b"),n(59,"2 mb"),t(),n(60,"."),t()(),i(61,"div",9)(62,"button",25),n(63,"Update"),t()()()(),i(64,"div",16)(65,"button",17),n(66,"Close"),t()()()()(),i(67,"div",26)(68,"h2",27),n(69,"List of Vehicle Types"),t(),i(70,"div",28)(71,"table",29,0)(73,"tr",30)(74,"th",31),n(75,"Vehicle Type"),t(),i(76,"th",31),n(77,"Vehicle Icon"),t(),i(78,"th",31),n(79,"Edit"),t()(),D(80,ae,9,4,"tr",32,N),t()()()()}l&2&&(s(9),u("formGroup",e.vehicleType),s(5),h(14,e.vehicleName!==null&&(e.vehicleName.touched||e.vehicleName.dirty)?14:-1),s(5),h(19,e.vehicleIcon!==null&&(e.vehicleIcon.touched||e.vehicleIcon.dirty)?19:-1),s(),u("hidden",e.isSizeOk),s(22),u("formGroup",e.editVType),s(5),h(47,e.editVehicleType!==null&&(e.editVehicleType.touched||e.editVehicleType.dirty)?47:-1),s(8),j(" ",e.selectedFile," "),s(),u("hidden",e.isSizeOk2),s(6),u("disabled",e.editVType.invalid),s(18),F(e.vehicles))},dependencies:[W,U,M,P,G,B,Q],styles:[".vehicleList[_ngcontent-%COMP%]{width:50vw}.icons[_ngcontent-%COMP%]{height:80px;width:80px;border-radius:5px}.listBox[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}tr[_ngcontent-%COMP%]:hover{background-color:#fbf7f7}"]});let o=c;return o})();export{ye as VehicleTypeComponent};
