"use strict";(self.webpackChunkbisema_basic=self.webpackChunkbisema_basic||[]).push([[246],{7246:(x,f,n)=>{n.r(f),n.d(f,{CheckoutModule:()=>c});var p=n(6895),Z=n(6491),r=n(433),t=n(4650),g=n(5136);class i extends g.b{constructor(e){super(e)}sendEmail(e){return this._networkService.post("api/order/mail",e)}}i.\u0275fac=function(e){return new(e||i)(t.LFG(t.zs3))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac});var h=n(1815),b=n(7103);const T=["dataToExport"];function U(a,e){if(1&a&&(t.TgZ(0,"tr",46)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"currency"),t.qZA()()),2&a){const o=e.$implicit,l=e.index;t.xp6(2),t.Oqu(l+1),t.xp6(2),t.Oqu(o.displayName),t.xp6(2),t.Oqu(t.lcZ(7,5,o.unitPrice)),t.xp6(3),t.Oqu(o.quantity),t.xp6(2),t.Oqu(t.lcZ(12,7,o.quantity*o.unitPrice))}}const _=function(){return{label1:"Name"}},v=function(){return{label1:"Email"}},A=function(){return{label1:"Phone"}},q=function(){return{label1:"Address"}};class u{constructor(e,o){this.fb=e,this.checkoutService=o,this.fromPerson=this.fb.group({name:["",[r.kI.required]],email:["",[r.kI.required,r.kI.email]],phone:["",[r.kI.required]],address:["",[r.kI.required]]}),this.cart=[],this.grandTotal=null}getCart(){let e=this.checkoutService._storageService.getItem("user");e=JSON.parse(e),this.checkoutService.getCartItemsByUserIDProjectIDAndManufacturingCompany(e.id,e.projectID,"").subscribe({next:o=>{o&&o.data&&(this.cart=o.data,this.loadCartDetails())}})}loadCartDetails(){let e=0;this.cart.length>0&&this.cart.forEach(o=>{e+=+o.quantity*o.unitPrice}),this.grandTotal=parseFloat(e.toString()).toFixed(2)}order(){let e=this,o=this.dataToExport.nativeElement;html2pdf().from(o).set({image:{type:"jpeg",quality:.98},html2canvas:{scale:3},jsPDF:{unit:"cm",format:"letter",orientation:"landscape"}}).toPdf().output("datauristring").then(function(m){m=m.split(",")[1],console.log(m);let d=new FormData;d.append("pdf",m),d.append("email","bisema@gmail.com"),d.append("cart",JSON.stringify(e.cart)),d.append("users_email",`${e.fromPerson.value.email}`),d.append("user_name",`${e.fromPerson.value.name}`),e.checkoutService.sendEmail(d).subscribe({next:w=>{console.log(w)}})})}ngOnInit(){this.getCart()}}u.\u0275fac=function(e){return new(e||u)(t.Y36(r.qu),t.Y36(i))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-checkout"]],viewQuery:function(e,o){if(1&e&&t.Gf(T,5),2&e){let l;t.iGM(l=t.CRH())&&(o.dataToExport=l.first)}},decls:123,vars:24,consts:[[1,"navbar","navbar-dark","bg-purple","navbar-expand-sm"],[1,"container-fluid","align-items-center","px-0"],[1,"d-flex","align-items-center","me-5"],["href","http://www.bisema.com","target","_blank",1,"navbar-brand"],["src","../assets/img/bisema_logo.jpg","alt","logo","height","35"],[1,"navbar-text","text-white","h5","me-5","pe-5","d-md-block","d-none"],[1,"me-2"],[1,"container-fluid","bg-white"],[1,"row","px-4"],[1,"row"],["dataToExport",""],[1,"col-12"],[1,"d-flex","justify-content-between","py-2"],[1,"mt-2"],[1,"border-dark"],[1,"col-md-6","col-12"],[1,"mt-4"],[3,"formGroup"],["for","from_name",1,"form-label"],["type","text","id","from_name","placeholder","Enter Name","formControlName","name",1,"form-control"],[1,"text-danger"],["fieldType","input",3,"control","labels"],["for","from_email",1,"form-label"],["type","email","id","from_email","placeholder","Enter Email","formControlName","email",1,"form-control"],["for","from_phone",1,"form-label"],["type","text","id","from_phone","placeholder","Enter Phone","formControlName","phone",1,"form-control"],["for","from_address",1,"form-label"],["id","from_address","rows","3","formControlName","address",1,"form-control"],[1,"table","table-striped"],[1,"thead-light"],["class","",4,"ngFor","ngForOf"],[1,"border","border-0"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn2","me-1","px-3",3,"disabled","click"],[1,"row","bg-purple","pt-3"],[1,"d-flex","justify-content-center"],[1,"list-inline","list-unstyled","m-0"],[1,"list-inline-item"],["href","https://www.facebook.com","target","https://www.facebook.com/bisemacorp",1,"text-white"],[1,"fa-brands","fa-facebook","fa-2x","me-2"],["href","https://www.linkedin.com ","target","https://www.linkedin.com/bisema-corporation",1,"text-white"],[1,"fa-brands","fa-linkedin","fa-2x","me-2"],["href","https://www.twitter.com ","target","https://www.twitter.com/bisemacorp",1,"text-white"],[1,"fa-brands","fa-twitter","fa-2x"],[1,"text-center","mt-3"],[1,"text-white"],[1,""]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5),t._uU(6," BiSemA Corporation Cloud Specification Services "),t.qZA(),t._UZ(7,"div",6),t.qZA()(),t.TgZ(8,"div",7)(9,"div",8)(10,"div",9,10)(12,"div",11)(13,"div",12)(14,"h4",13),t._uU(15," Invoice "),t.qZA()()(),t._UZ(16,"hr",14),t.TgZ(17,"div",15)(18,"h2",16),t._uU(19,"Buyer's Information : "),t.qZA(),t.TgZ(20,"form",17)(21,"div")(22,"label",18),t._uU(23,"Name"),t.qZA(),t._UZ(24,"input",19),t.TgZ(25,"label",20),t._UZ(26,"app-form-error-message",21),t.qZA()(),t.TgZ(27,"div")(28,"label",22),t._uU(29,"Email"),t.qZA(),t._UZ(30,"input",23),t.TgZ(31,"label",20),t._UZ(32,"app-form-error-message",21),t.qZA()(),t.TgZ(33,"div")(34,"label",24),t._uU(35,"Phone"),t.qZA(),t._UZ(36,"input",25),t.TgZ(37,"label",20),t._UZ(38,"app-form-error-message",21),t.qZA()(),t.TgZ(39,"div")(40,"label",26),t._uU(41,"Address"),t.qZA(),t._UZ(42,"textarea",27),t.TgZ(43,"label",20),t._UZ(44,"app-form-error-message",21),t.qZA()()()(),t.TgZ(45,"div",15)(46,"h2",16),t._uU(47,"Product Details"),t.qZA(),t.TgZ(48,"table",28)(49,"thead",29)(50,"tr")(51,"th"),t._uU(52,"#"),t.qZA(),t.TgZ(53,"th"),t._uU(54,"Description"),t.qZA(),t.TgZ(55,"th"),t._uU(56,"Rate"),t.qZA(),t.TgZ(57,"th"),t._uU(58,"Quantity"),t.qZA(),t.TgZ(59,"th"),t._uU(60,"Amount"),t.qZA()()(),t.TgZ(61,"tbody"),t.YNc(62,U,13,9,"tr",30),t.TgZ(63,"tr"),t._UZ(64,"td",31)(65,"td",31),t.TgZ(66,"td"),t._uU(67,"Sub Total"),t.qZA(),t._UZ(68,"td"),t.TgZ(69,"td"),t._uU(70),t.ALo(71,"currency"),t.qZA()(),t.TgZ(72,"tr"),t._UZ(73,"td",31)(74,"td",31),t.TgZ(75,"td"),t._uU(76,"Tax (5%)"),t.qZA(),t._UZ(77,"td"),t.TgZ(78,"td"),t._uU(79,"0"),t.qZA()(),t.TgZ(80,"tr"),t._UZ(81,"td",31)(82,"td",31),t.TgZ(83,"td"),t._uU(84,"Total"),t.qZA(),t._UZ(85,"td"),t.TgZ(86,"td"),t._uU(87),t.ALo(88,"currency"),t.qZA()(),t.TgZ(89,"tr"),t._UZ(90,"td",31)(91,"td",31),t.TgZ(92,"td"),t._uU(93,"Balance Due"),t.qZA(),t._UZ(94,"td"),t.TgZ(95,"td")(96,"b"),t._uU(97,"CAD"),t.qZA(),t._uU(98),t.ALo(99,"currency"),t.qZA()()()()()(),t._UZ(100,"hr",14),t.TgZ(101,"div",32)(102,"button",33),t.NdJ("click",function(){return o.order()}),t._uU(103," Order "),t.qZA()()()(),t.TgZ(104,"div",34)(105,"div",11)(106,"div",35)(107,"ul",36)(108,"li",37)(109,"a",38),t._UZ(110,"i",39),t.qZA()(),t.TgZ(111,"li",37)(112,"a",40),t._UZ(113,"i",41),t.qZA()(),t.TgZ(114,"li",37)(115,"a",42),t._UZ(116,"i",43),t.qZA()()()(),t.TgZ(117,"div",44)(118,"p",45),t._uU(119,"Copyright "),t.TgZ(120,"span"),t._uU(121,"\xa9"),t.qZA(),t._uU(122," 2023 BiSemA Corporation."),t.qZA()()()()),2&e&&(t.xp6(20),t.Q6J("formGroup",o.fromPerson),t.xp6(6),t.Q6J("control",o.fromPerson.get("name"))("labels",t.DdM(20,_)),t.xp6(6),t.Q6J("control",o.fromPerson.get("email"))("labels",t.DdM(21,v)),t.xp6(6),t.Q6J("control",o.fromPerson.get("phone"))("labels",t.DdM(22,A)),t.xp6(6),t.Q6J("control",o.fromPerson.get("address"))("labels",t.DdM(23,q)),t.xp6(18),t.Q6J("ngForOf",o.cart),t.xp6(8),t.Oqu(t.lcZ(71,14,o.grandTotal)),t.xp6(17),t.Oqu(t.lcZ(88,16,o.grandTotal)),t.xp6(11),t.hij(" ",t.lcZ(99,18,o.grandTotal),""),t.xp6(4),t.Q6J("disabled",!o.fromPerson.valid))},dependencies:[p.sg,h.J,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,b.M2,p.H9]});const y=[{path:"",component:u}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[Z.Bz.forChild(y),Z.Bz]});var C=n(710);class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({providers:[i],imports:[p.ez,C.m,s]})}}]);