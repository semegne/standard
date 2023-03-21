"use strict";(self.webpackChunkbisema_basic=self.webpackChunkbisema_basic||[]).push([[925],{6925:(J,T,a)=>{a.r(T),a.d(T,{AdminModule:()=>d});var b=a(6895),v=a(6491),n=a(433),t=a(1571),A=a(5136);class i extends A.b{constructor(e){super(e)}sendEmail(e){return this._networkService.post("api/order/mail",e)}getAdminCartItems(e,o){return this._networkService.get(`api/get/admin/cart/${e}/${o}`)}}i.\u0275fac=function(e){return new(e||i)(t.LFG(t.zs3))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac});var _=a(1815),Z=a(2687),m=a(7103),U=a(2216);class u{constructor(e,o){this.adminService=e,this.router=o,this.faUserCircle=Z.m08}logout(){this.adminService._storageService.removeItem("user"),this.router.navigateByUrl("/login")}}u.\u0275fac=function(e){return new(e||u)(t.Y36(i),t.Y36(v.F0))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-admin-header"]],decls:14,vars:1,consts:[[1,"navbar","navbar-dark","bg-purple","navbar-expand-sm"],[1,"container-fluid","align-items-center","px-0"],[1,"d-flex","align-items-center","me-5"],["href","http://www.bisema.com","target","_blank",1,"navbar-brand"],["src","../assets/img/bisema_logo.jpg","alt","logo","height","35"],[1,"navbar-text","text-white","h5","me-5","pe-5","d-md-block","d-none"],[1,"me-2"],["ngbDropdown","","display","dynamic","placement","bottom-end",1,"nav-item","ms-3"],["tabindex","0","ngbDropdownToggle","","id","navbarDropdown3","role","button",1,"nav-link","text-white","userAnchor"],[3,"icon"],["ngbDropdownMenu","","aria-labelledby","navbarDropdown3",1,"dropdown-menu"],["ngbDropdownItem","","href","javascript:;",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5),t._uU(6," BiSemA Corporation Cloud Specification Services "),t.qZA(),t.TgZ(7,"div",6)(8,"div",7)(9,"a",8),t._UZ(10,"fa-icon",9),t.qZA(),t.TgZ(11,"div",10)(12,"a",11),t.NdJ("click",function(){return o.logout()}),t._uU(13,"Log Out"),t.qZA()()()()()()),2&e&&(t.xp6(10),t.Q6J("icon",o.faUserCircle))},dependencies:[m.jt,m.iD,m.Vi,m.TH,m.M2,U.BN],styles:[".userAnchor[_ngcontent-%COMP%]{font-size:20px}"]});class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-admin-footer"]],decls:19,vars:0,consts:[[1,"row","bg-purple","pt-3"],[1,"col-12"],[1,"d-flex","justify-content-center"],[1,"list-inline","list-unstyled","m-0"],[1,"list-inline-item"],["href","https://www.facebook.com","target","https://www.facebook.com/bisemacorp",1,"text-white"],[1,"fa-brands","fa-facebook","fa-2x","me-2"],["href","https://www.linkedin.com ","target","https://www.linkedin.com/bisema-corporation",1,"text-white"],[1,"fa-brands","fa-linkedin","fa-2x","me-2"],["href","https://www.twitter.com ","target","https://www.twitter.com/bisemacorp",1,"text-white"],[1,"fa-brands","fa-twitter","fa-2x"],[1,"text-center","mt-3"],[1,"text-white"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li",4)(5,"a",5),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"li",4)(8,"a",7),t._UZ(9,"i",8),t.qZA()(),t.TgZ(10,"li",4)(11,"a",9),t._UZ(12,"i",10),t.qZA()()()(),t.TgZ(13,"div",11)(14,"p",12),t._uU(15,"Copyright "),t.TgZ(16,"span"),t._uU(17,"\xa9"),t.qZA(),t._uU(18," 2023 BiSemA Corporation."),t.qZA()()()())}});const C=["dataToExport"];function y(r,e){if(1&r&&(t.TgZ(0,"tr",29)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"currency"),t.qZA()()),2&r){const o=e.$implicit,l=e.index;t.xp6(2),t.Oqu(l+1),t.xp6(2),t.Oqu(o.displayName),t.xp6(2),t.Oqu(t.lcZ(7,5,o.unitPrice)),t.xp6(3),t.Oqu(o.quantity),t.xp6(2),t.Oqu(t.lcZ(12,7,o.quantity*o.unitPrice))}}const q=function(){return{label1:"Name"}},w=function(){return{label1:"Email"}},x=function(){return{label1:"Phone"}},k=function(){return{label1:"Address"}};class f{constructor(e,o){this.fb=e,this.adminService=o,this.fromPerson=this.fb.group({name:["",[n.kI.required]],email:["",[n.kI.required,n.kI.email]],phone:["",[n.kI.required]],address:["",[n.kI.required]]}),this.cart=[],this.grandTotal=null,this.calGrandTotal=null,this.discountControl=new n.NI(""),this.discountControl.valueChanges.subscribe(l=>{this.calculateDiscount()})}getCart(){let e=this.adminService._storageService.getItem("user");e=JSON.parse(e),this.adminService.getAdminCartItems(e.id,e.projectID).subscribe({next:o=>{o&&o.data&&(this.cart=o.data,this.loadCartDetails())}})}loadCartDetails(){let e=0;this.cart.length>0&&this.cart.forEach(o=>{e+=+o.quantity*o.unitPrice}),this.grandTotal=parseFloat(e.toString()).toFixed(2),this.calGrandTotal=this.grandTotal}order(){let e=this,o=this.dataToExport.nativeElement;html2pdf().from(o).set({image:{type:"jpeg",quality:.98},html2canvas:{scale:3},jsPDF:{unit:"cm",format:"letter",orientation:"landscape"}}).toPdf().output("datauristring").then(function(h){h=h.split(",")[1],console.log(h);let c=new FormData;c.append("pdf",h),c.append("email","bisema@gmail.com"),c.append("cart",JSON.stringify(e.cart)),c.append("users_email",`${e.fromPerson.value.email}`),c.append("user_name",`${e.fromPerson.value.name}`),e.adminService.sendEmail(c).subscribe({next:S=>{console.log(S)}})})}calculateDiscount(){this.calGrandTotal=this.grandTotal-this.grandTotal/100*this.discountControl.value}ngOnInit(){this.getCart()}}f.\u0275fac=function(e){return new(e||f)(t.Y36(n.qu),t.Y36(i))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-checkout"]],viewQuery:function(e,o){if(1&e&&t.Gf(C,5),2&e){let l;t.iGM(l=t.CRH())&&(o.dataToExport=l.first)}},decls:107,vars:25,consts:[[1,"container-fluid","bg-white"],[1,"row","px-4"],["bgcolor","#f1e5f8"],[1,"row"],["dataToExport",""],[1,"col-12"],[1,"d-flex","justify-content-between","py-2"],[1,"mt-2"],[1,"border-dark"],[1,"col-md-6","col-12"],[1,"mt-4"],[3,"formGroup"],["for","from_name",1,"form-label"],["type","text","id","from_name","placeholder","Enter Name","formControlName","name",1,"form-control"],[1,"text-danger"],["fieldType","input",3,"control","labels"],["for","from_email",1,"form-label"],["type","email","id","from_email","placeholder","Enter Email","formControlName","email",1,"form-control"],["for","from_phone",1,"form-label"],["type","text","id","from_phone","placeholder","Enter Phone","formControlName","phone",1,"form-control"],["for","from_address",1,"form-label"],["id","from_address","rows","3","formControlName","address",1,"form-control"],[1,"table","table-striped"],[1,"thead-light"],["class","",4,"ngFor","ngForOf"],[1,"border","border-0"],["type","text",1,"form-control",3,"formControl"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn2","me-1","px-3",3,"disabled","click"],[1,""]],template:function(e,o){1&e&&(t._UZ(0,"app-admin-header"),t.TgZ(1,"div",0)(2,"div",1)(3,"body",2)(4,"div",3,4)(6,"div",5)(7,"div",6)(8,"h4",7),t._uU(9," Invoice "),t.qZA()()(),t._UZ(10,"hr",8),t.TgZ(11,"div",9)(12,"h2",10),t._uU(13,"Buyer's Information : "),t.qZA(),t.TgZ(14,"form",11)(15,"div")(16,"label",12),t._uU(17,"Name"),t.qZA(),t._UZ(18,"input",13),t.TgZ(19,"label",14),t._UZ(20,"app-form-error-message",15),t.qZA()(),t.TgZ(21,"div")(22,"label",16),t._uU(23,"Email"),t.qZA(),t._UZ(24,"input",17),t.TgZ(25,"label",14),t._UZ(26,"app-form-error-message",15),t.qZA()(),t.TgZ(27,"div")(28,"label",18),t._uU(29,"Phone"),t.qZA(),t._UZ(30,"input",19),t.TgZ(31,"label",14),t._UZ(32,"app-form-error-message",15),t.qZA()(),t.TgZ(33,"div")(34,"label",20),t._uU(35,"Address"),t.qZA(),t._UZ(36,"textarea",21),t.TgZ(37,"label",14),t._UZ(38,"app-form-error-message",15),t.qZA()()()(),t.TgZ(39,"div",9)(40,"h2",10),t._uU(41,"Product Details"),t.qZA(),t.TgZ(42,"table",22)(43,"thead",23)(44,"tr")(45,"th"),t._uU(46,"#"),t.qZA(),t.TgZ(47,"th"),t._uU(48,"Description"),t.qZA(),t.TgZ(49,"th"),t._uU(50,"Rate"),t.qZA(),t.TgZ(51,"th"),t._uU(52,"Quantity"),t.qZA(),t.TgZ(53,"th"),t._uU(54,"Amount"),t.qZA()()(),t.TgZ(55,"tbody"),t.YNc(56,y,13,9,"tr",24),t.TgZ(57,"tr"),t._UZ(58,"td",25)(59,"td",25),t.TgZ(60,"td"),t._uU(61,"Discount %"),t.qZA(),t._UZ(62,"td"),t.TgZ(63,"td"),t._UZ(64,"input",26),t.qZA()(),t.TgZ(65,"tr"),t._UZ(66,"td",25)(67,"td",25),t.TgZ(68,"td"),t._uU(69,"Sub Total"),t.qZA(),t._UZ(70,"td"),t.TgZ(71,"td"),t._uU(72),t.ALo(73,"currency"),t.qZA()(),t.TgZ(74,"tr"),t._UZ(75,"td",25)(76,"td",25),t.TgZ(77,"td"),t._uU(78,"Tax (5%)"),t.qZA(),t._UZ(79,"td"),t.TgZ(80,"td"),t._uU(81,"0"),t.qZA()(),t.TgZ(82,"tr"),t._UZ(83,"td",25)(84,"td",25),t.TgZ(85,"td"),t._uU(86,"Total"),t.qZA(),t._UZ(87,"td"),t.TgZ(88,"td"),t._uU(89),t.ALo(90,"currency"),t.qZA()(),t.TgZ(91,"tr"),t._UZ(92,"td",25)(93,"td",25),t.TgZ(94,"td"),t._uU(95,"Balance Due"),t.qZA(),t._UZ(96,"td"),t.TgZ(97,"td")(98,"b"),t._uU(99,"CAD"),t.qZA(),t._uU(100),t.ALo(101,"currency"),t.qZA()()()()()(),t._UZ(102,"hr",8),t.TgZ(103,"div",27)(104,"button",28),t.NdJ("click",function(){return o.order()}),t._uU(105," Order "),t.qZA()()()(),t._UZ(106,"app-admin-footer"),t.qZA()),2&e&&(t.xp6(14),t.Q6J("formGroup",o.fromPerson),t.xp6(6),t.Q6J("control",o.fromPerson.get("name"))("labels",t.DdM(21,q)),t.xp6(6),t.Q6J("control",o.fromPerson.get("email"))("labels",t.DdM(22,w)),t.xp6(6),t.Q6J("control",o.fromPerson.get("phone"))("labels",t.DdM(23,x)),t.xp6(6),t.Q6J("control",o.fromPerson.get("address"))("labels",t.DdM(24,k)),t.xp6(18),t.Q6J("ngForOf",o.cart),t.xp6(8),t.Q6J("formControl",o.discountControl),t.xp6(8),t.Oqu(t.lcZ(73,15,o.grandTotal)),t.xp6(17),t.Oqu(t.lcZ(90,17,o.grandTotal)),t.xp6(11),t.hij(" ",t.lcZ(101,19,o.calGrandTotal),""),t.xp6(4),t.Q6J("disabled",!o.fromPerson.valid))},dependencies:[b.sg,_.J,n._Y,n.Fj,n.JJ,n.JL,n.oH,n.sg,n.u,u,p,b.H9]});class g{constructor(e,o){this.adminService=e,this.fb=o,this.faEnvelope=Z.FU$,this.faKey=Z.DD4,this.faArrowRight=Z.eFW}ngOnInit(){}}g.\u0275fac=function(e){return new(e||g)(t.Y36(i),t.Y36(n.qu))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-users"]],decls:0,vars:0,template:function(e,o){}});const D=[{path:"checkout",component:f},{path:"users",component:g}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[v.Bz.forChild(D),v.Bz]});var F=a(710);class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({providers:[i],imports:[b.ez,F.m,s]})}}]);