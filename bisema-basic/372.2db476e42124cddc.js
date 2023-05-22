"use strict";(self.webpackChunkbisema_basic=self.webpackChunkbisema_basic||[]).push([[372],{3372:(M,T,s)=>{s.r(T),s.d(T,{MainModule:()=>f});var p=s(6895),c=s(6491),l=s(2687),t=s(1571),x=s(5136);class u extends x.b{constructor(n){super(n)}getManufacturingCompanies(){return this._networkService.get(`api/manufacturingcompany/${location.host}`)}getCompanyCatalogues(n){return this._networkService.get(n)}getManufacturingCatalogue(n,e){return this._networkService.get(`assets/${n}/${e}/${e}.json`)}}u.\u0275fac=function(n){return new(n||u)(t.LFG(t.zs3))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac});var S=s(6916),d=s(7103),E=s(2216);class C{}C.\u0275fac=function(n){return new(n||C)},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-footer"]],decls:19,vars:0,consts:[[1,"row","bg-purple","pt-3","me-0"],[1,"col-12"],[1,"d-flex","justify-content-center"],[1,"list-inline","list-unstyled","m-0"],[1,"list-inline-item"],["href","https://www.facebook.com","target","https://www.facebook.com/bisemacorp",1,"text-white"],[1,"fa-brands","fa-facebook","fa-2x","me-2"],["href","https://www.linkedin.com ","target","https://www.linkedin.com/bisema-corporation",1,"text-white"],[1,"fa-brands","fa-linkedin","fa-2x","me-2"],["href","https://www.twitter.com ","target","https://www.twitter.com/bisemacorp",1,"text-white"],[1,"fa-brands","fa-twitter","fa-2x"],[1,"text-center","mt-3"],[1,"text-white"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li",4)(5,"a",5),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"li",4)(8,"a",7),t._UZ(9,"i",8),t.qZA()(),t.TgZ(10,"li",4)(11,"a",9),t._UZ(12,"i",10),t.qZA()()()(),t.TgZ(13,"div",11)(14,"p",12),t._uU(15,"Copyright "),t.TgZ(16,"span"),t._uU(17,"\xa9"),t.qZA(),t._uU(18," 2023 BiSemA Corporation."),t.qZA()()()())}});var m=s(433),L=s(2340),Z=s(3666),w=s(228),A=s(8387),U=s(6814);const O=["treeContainer"];function B(a,n){if(1&a&&(t.TgZ(0,"span",13)(1,"a",14),t._UZ(2,"img",15),t.qZA()()),2&a){const e=t.oxw();t.xp6(1),t.s9C("href",e.companyControl.value.CompanyUrlName,t.LSH),t.xp6(1),t.cQ8("src","",e.baseUrl,"assets/",e.companyControl.value.CompanyName,"/logo/",e.logo,"",t.LSH)}}function I(a,n){if(1&a&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e.CompanyName)}}function D(a,n){if(1&a&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e.name)}}function Q(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"input",19,20),t.NdJ("keyup",function(){t.CHM(e);const i=t.MAs(3),r=t.MAs(9);return t.KtG(r.treeModel.filterNodes(i.value))}),t.qZA()(),t.TgZ(4,"label",5),t._uU(5),t.qZA(),t.TgZ(6,"div",21,22)(8,"tree-root",23,24),t.NdJ("activate",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.onActivate(i))}),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(5),t.Oqu(e.catalogue.desc),t.xp6(3),t.Q6J("options",e.options)("nodes",e.nodes)}}class v{constructor(n,e,o,i){this.mainService=n,this.store=e,this.router=o,this.activatedRoute=i,this.baseUrl=L.N.baseUrl,this.faClose=l.YIN,this.faFile=l.gMD,this.faShoppingBasket=l.sq$,this.faCube=l.hGM,this.faSignOut=l.HEx,this.faHome=l.J9Y,this.companyControl=new m.NI(""),this.companies=[],this.catalogControl=new m.NI(""),this.companyCatalogues=[],this.companyImages=[],this.logo="",this.catalogue=null,this.treeContainer={},this.nodes=[],this.options={scrollContainer:this.treeContainer.nativeElement,allowDrag:r=>!r.hasChildren},this.cartUrl=!1,this.navigateTo="",this.urlParts=[],this.cartQty=0,this.router.events.subscribe({next:r=>{if(r instanceof c.m2){this.navigateTo=r.url,this.urlParts=r.url.split("/");let g=this.urlParts[this.urlParts.length-1];this.cartUrl="cart"==g,"specification"==g&&this.getManufacturingCompanies(),this.sideNav(g)}}})}getManufacturingCompanies(){this.mainService.getManufacturingCompanies().subscribe({next:n=>{this.companies=n,this.companyControl.setValue(this.urlParts.length>=3?this.companies.find(e=>e.CompanyName==this.urlParts[2]):this.companies[0]),this.getCompanyCatalogues()},error:n=>{}})}getCompanyCatalogues(n=!1){let e=this.companyControl.value.CompanyName;this.catalogue=null,this.companyCatalogues=[],this.catalogControl.setValue(""),this.mainService.getCompanyCatalogues(e).subscribe({next:o=>{for(let r=0;r<o.catalogs.length;r++)"company_images"!=o.catalogs[r].name&&"logo"!=o.catalogs[r].name&&this.companyCatalogues.push(o.catalogs[r]);this.companyImages=o.company_images,this.logo=o.company_logo[0].name,this.store.dispatch((0,w.T)({company:{company:this.companyControl.value,companyImages:this.companyImages}})),n&&!this.navigateTo.includes("cart")&&this.router.navigateByUrl(`/specification/${e}`),""!=this.navigateTo?!this.navigateTo.includes("specification")&&!n&&(this.catalogControl.setValue(this.companyCatalogues[0]),this.getCatalogue()):window.location.href.includes("catalogue")&&(this.catalogControl.setValue(this.companyCatalogues[0]),this.getCatalogue())},error:o=>{}})}onCompanyChange(){this.store.dispatch((0,A.p)({catalogue:null})),this.getCompanyCatalogues(!0)}getCatalogue(){let n=this.catalogControl.value.name,e=this.companyControl.value.CompanyName;this.mainService.getManufacturingCatalogue(e,n).subscribe({next:o=>{this.catalogue=o.CATALOG,this.nodes=[];for(let i=0;i<this.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL.length;i++){const r={id:this.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL[i].id,name:this.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL[i].DESCRIPTIONS.TEXT.Text,children:[]};for(let g=0;g<this.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL[i].LEVEL.LABEL.length;g++){const N={id:this.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL[i].LEVEL.LABEL[g].id,name:this.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL[i].LEVEL.LABEL[g].DESCRIPTIONS.TEXT.Text,children:[]};for(let _=0;_<this.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL[i].LEVEL.LABEL[g].TOC_ITEMS.TOC_ITEM.length;_++)N.children.push({id:this.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL[i].LEVEL.LABEL[g].TOC_ITEMS.TOC_ITEM[_].id,name:this.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL[i].LEVEL.LABEL[g].TOC_ITEMS.TOC_ITEM[_].id});r.children.push(N)}this.nodes.push(r)}this.catalogue.catalogueCode=n,this.store.dispatch((0,A.p)({catalogue:this.catalogue})),this.navigate(`/catalogue/${e}`)},error:o=>{}})}onActivate(n){let e=this.tree.treeModel.getNodeById(n.node.data.id);if("number"==typeof e.parent.data.id){let o=e.parent.data.children;for(let i=0;i<o.length;i++)this.tree.treeModel.getNodeById(o[i].id).collapseAll();this.navigate(`/catalogue/${this.companyControl.value.CompanyName}/sub-category/${e.data.id}`)}else if(null!=e.data.children){let o=e.parent.data.children;for(let i=0;i<o.length;i++)this.tree.treeModel.getNodeById(o[i].id).collapseAll();this.navigate(`/catalogue/${this.companyControl.value.CompanyName}/products/${e.parent.data.id}/${e.data.id}`)}else{const o=this.tree.treeModel.getNodeById(e.parent.data.id);this.navigate(`/catalogue/${this.companyControl.value.CompanyName}/product/${o.parent.data.id}/${e.parent.data.id}/${e.data.id}`)}e.expand()}sideNav(n){let e=this.tree?.treeModel.getNodeById(n);if(e){let o=e.parent.data.children;for(let i=0;i<o.length;i++)this.tree.treeModel.getNodeById(o[i].id).collapseAll();e.expand(),e.setIsActive(!0)}}navigate(n){this.cartUrl||this.router.navigateByUrl(n)}logout(){this.mainService._storageService.removeItem("user"),this.router.navigateByUrl("/login")}ngOnInit(){this.getManufacturingCompanies()}}v.\u0275fac=function(n){return new(n||v)(t.Y36(u),t.Y36(U.yh),t.Y36(c.F0),t.Y36(c.gz))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-sidebar"]],viewQuery:function(n,e){if(1&n&&(t.Gf(Z.qr,5),t.Gf(O,5)),2&n){let o;t.iGM(o=t.CRH())&&(e.tree=o.first),t.iGM(o=t.CRH())&&(e.treeContainer=o.first)}},inputs:{cartQty:"cartQty"},decls:22,vars:9,consts:[[1,"list-group","border-0","rounded-0","h-100"],["href","http://www.bisema.com","target","_blank","aria-current","true",1,"logo","bg-purple"],["src","../../assets/img/bisema_logo.jpg","alt","logo","height","35"],[1,"list-group-item","list-group-item-action","bg-light-purple","h-100"],[1,"mb-3"],["for","exampleFormControlInput1",1,"form-label"],[1,"input-group"],["class","input-group-text",4,"ngIf"],[1,"form-select","form-select-sm","decorated",3,"formControl","change"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"form-select","form-select-sm",3,"formControl","change"],["value","","selected","","disabled",""],["class","",4,"ngIf"],[1,"input-group-text"],["target","_blank",3,"href"],["height","30",3,"src"],[3,"ngValue"],[1,""],[1,"input-group","mb-3"],["type","text","id","filter","placeholder","Search",1,"form-control",3,"keyup"],["filter",""],[2,"height","450px"],["treeContainer",""],[3,"options","nodes","activate"],["tree",""]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"a",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"label",5)(6,"b"),t._uU(7,"Manufacturing Company"),t.qZA()(),t.TgZ(8,"div",6),t.YNc(9,B,3,4,"span",7),t.TgZ(10,"select",8),t.NdJ("change",function(){return e.onCompanyChange()}),t.YNc(11,I,2,2,"option",9),t.qZA()()(),t.TgZ(12,"div",4)(13,"label",5)(14,"b"),t._uU(15),t.ALo(16,"uppercase"),t.qZA()(),t.TgZ(17,"select",10),t.NdJ("change",function(){return e.getCatalogue()}),t.TgZ(18,"option",11),t._uU(19,"Select Catalogue"),t.qZA(),t.YNc(20,D,2,2,"option",9),t.qZA()(),t.YNc(21,Q,10,3,"div",12),t.qZA()()),2&n&&(t.xp6(9),t.Q6J("ngIf",""!=e.companyControl.value.CompanyName&&""!=e.logo),t.xp6(1),t.Q6J("formControl",e.companyControl),t.xp6(1),t.Q6J("ngForOf",e.companies),t.xp6(4),t.hij("",t.lcZ(16,7,e.companyControl.value.CompanyName)," Catalogue"),t.xp6(2),t.Q6J("formControl",e.catalogControl),t.xp6(3),t.Q6J("ngForOf",e.companyCatalogues),t.xp6(1),t.Q6J("ngIf",e.catalogue))},dependencies:[p.sg,p.O5,m.YN,m.Kr,m.EJ,m.JJ,m.oH,Z.qr,p.gd],styles:["div[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:15px}"]});var J=s(1188);function P(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.toggle())}),t._UZ(1,"span",16),t.qZA()}}function F(a,n){1&a&&(t.TgZ(0,"a",17),t._UZ(1,"img",18),t.qZA())}function k(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(),r=t.MAs(16);return t.KtG(i.open(r))}),t._UZ(1,"fa-icon",10),t._uU(2," Small cart "),t.TgZ(3,"span",20),t._uU(4),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("icon",e.faShoppingBasket),t.xp6(3),t.hij(" [",e.cartQty,"] ")}}function V(a,n){if(1&a&&(t.TgZ(0,"div",28)(1,"div",29)(2,"div"),t._UZ(3,"img",30),t.qZA(),t.TgZ(4,"div",31)(5,"strong",32),t._uU(6),t.qZA(),t.TgZ(7,"span",33)(8,"strong"),t._uU(9,"QTY*"),t.qZA(),t.TgZ(10,"p",34),t._uU(11),t.qZA()()()(),t._UZ(12,"hr",35),t.qZA()),2&a){const e=n.$implicit,o=t.oxw(2);t.xp6(3),t.FAE("src","",o.baseUrl,"assets/",e.companyCode,"/",e.catalogName,"/prod_icons/",e.productImage,"",t.LSH),t.xp6(3),t.hij(" Price: $",e.unitPrice," "),t.xp6(5),t.Oqu(e.quantity)}}function j(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",21)(1,"h4",22),t._uU(2,"Cart"),t.qZA(),t.TgZ(3,"button",23),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.KtG(r.dismiss("Cross click"))}),t.qZA()(),t.TgZ(4,"div",24)(5,"a",25),t._uU(6),t.qZA(),t._UZ(7,"hr",26),t.YNc(8,V,13,6,"div",27),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.hij(" Cart (",e.cartQty," Items) "),t.xp6(2),t.Q6J("ngForOf",e.cart)}}class b{constructor(n,e,o){this.offcanvasService=n,this.storageService=e,this.router=o,this.baseUrl=L.N.baseUrl,this.faUserCircle=l.m08,this.faShoppingBasket=l.sq$,this.toggleCollapse=new t.vpe,this.cartQty=0,this.cart=[],this.url="",this.isDealer=!0,this.logo=!1}open(n){this.offcanvasService.open(n,{position:"end"}).result.then(e=>{},e=>{})}toggle(){this.logo=!this.logo,this.toggleCollapse.emit()}logout(){this.storageService.removeItem("user"),this.router.navigateByUrl("/login")}ngOnInit(){}}function H(a,n){if(1&a&&(t.TgZ(0,"div",11),t._UZ(1,"app-sidebar",12),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("cartQty",e.cartQty)}}function Y(a,n){if(1&a&&(t.TgZ(0,"div",13)(1,"h4",14),t._UZ(2,"fa-icon",15),t.TgZ(3,"small",16)(4,"b"),t._uU(5," Project Name : "),t.qZA()(),t._uU(6),t.qZA(),t.TgZ(7,"h4",14),t._UZ(8,"fa-icon",15),t.TgZ(9,"small",16)(10,"b"),t._uU(11," User : "),t.qZA()(),t._uU(12),t.qZA(),t.TgZ(13,"h4",14),t._UZ(14,"fa-icon",15),t.TgZ(15,"small",16)(16,"b"),t._uU(17," Dealer Name : "),t.qZA()(),t._uU(18),t.qZA()()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("icon",e.faCogs),t.xp6(4),t.hij("",e.projectName," "),t.xp6(2),t.Q6J("icon",e.faUser),t.xp6(4),t.hij("",e.userDetails.email," "),t.xp6(2),t.Q6J("icon",e.faUsers),t.xp6(4),t.hij(" ",e.dealerName," ")}}function $(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.goToPage("externallinks"))}),t._uU(2,"Information"),t.qZA(),t.TgZ(3,"div",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.goToPage("cart"))}),t._uU(4),t.qZA(),t.TgZ(5,"div",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.goToPage("specification"))}),t._uU(6,"Specification"),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",e.url.includes("externallinks")?"tab-active":"bg-purple"),t.xp6(2),t.Q6J("ngClass",e.url.includes("cart")?"tab-active":"bg-purple"),t.xp6(1),t.hij("Shopping Cart [",e.cartQty,"]"),t.xp6(1),t.Q6J("ngClass",e.url.includes("catalogue")?"tab-active":"bg-purple")}}b.\u0275fac=function(n){return new(n||b)(t.Y36(d._B),t.Y36(J.V),t.Y36(c.F0))},b.\u0275cmp=t.Xpm({type:b,selectors:[["app-header"]],inputs:{cartQty:"cartQty",cart:"cart",url:"url",isDealer:"isDealer"},outputs:{toggleCollapse:"toggleCollapse"},decls:17,vars:4,consts:[[1,"navbar","navbar-dark","bg-purple","navbar-expand-sm"],[1,"container-fluid","align-items-center","px-0"],[1,"d-flex","align-items-center","me-5"],["class","btn btn-lg","type","button",3,"click",4,"ngIf"],["class","navbar-brand","href","http://www.bisema.com","target","_blank",4,"ngIf"],[1,"navbar-text","text-white","h5","me-5","pe-5","d-md-block","d-none"],[1,"me-3","d-flex","align-items-center"],["type","button","class","btn btn-light btn2",3,"click",4,"ngIf"],["ngbDropdown","","display","dynamic","placement","bottom-end",1,"nav-item","ms-3"],["tabindex","0","ngbDropdownToggle","","id","navbarDropdown3","role","button",1,"nav-link","text-white","userAnchor"],[3,"icon"],["ngbDropdownMenu","","aria-labelledby","navbarDropdown3",1,"dropdown-menu"],["ngbDropdownItem","","href","javascript:;",3,"click"],["class","bg-light-purple"],["content",""],["type","button",1,"btn","btn-lg",3,"click"],[1,"navbar-toggler-icon"],["href","http://www.bisema.com","target","_blank",1,"navbar-brand"],["src","../../assets/img/bisema_logo.jpg","alt","logo","height","35"],["type","button",1,"btn","btn-light","btn2",3,"click"],[1,""],[1,"offcanvas-header"],["id","offcanvas-basic-title",1,"offcanvas-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"offcanvas-body"],["type","button","target","_blank","routerLink","/cart",1,"ml-1","btn","btn-light",2,"color","black"],[1,"mt-3"],["class","ml-2",4,"ngFor","ngForOf"],[1,"ml-2"],[1,"d-flex","justify-content-between"],["width","100","alt","Buy",1,"rounded","float-left",3,"src"],[1,"d-flex","flex-column","justify-content-between"],[1,"ml-5"],[1,"d-flex"],[1,"ms-1","bg-white","border","text-center",2,"width","75px"],[1,"mt-1"]],template:function(n,e){1&n&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"div",2),t.YNc(3,P,2,0,"button",3),t.YNc(4,F,2,0,"a",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6," BiSemA Corporation Cloud Specification Services "),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,k,5,2,"button",7),t.TgZ(9,"div",8)(10,"a",9),t._UZ(11,"fa-icon",10),t.qZA(),t.TgZ(12,"div",11)(13,"a",12),t.NdJ("click",function(){return e.logout()}),t._uU(14,"Log Out"),t.qZA()()()()()(),t.YNc(15,j,9,2,"ng-template",13,14,t.W1O)),2&n&&(t.xp6(3),t.Q6J("ngIf",!e.isDealer),t.xp6(1),t.Q6J("ngIf",e.logo||e.isDealer),t.xp6(4),t.Q6J("ngIf",!e.url.includes("cart")&&!e.url.includes("checkout")),t.xp6(3),t.Q6J("icon",e.faUserCircle))},dependencies:[p.sg,p.O5,d.jt,d.iD,d.Vi,d.TH,d.M2,E.BN,c.rH],styles:[".userAnchor[_ngcontent-%COMP%]{font-size:20px}"]});const q=function(a,n,e){return{"bg-main":a,"bg-white":n,"bg-sidenav":e}};class y{constructor(n,e,o,i){this.router=n,this.mainService=e,this._location=o,this.busService=i,this.faUsers=l.FVb,this.faCogs=l.Kb6,this.faUser=l.ILF,this.isCollapsed=!1,this.cartQty=0,this.cart=[],this.url=null,this.tabs=[{id:1,name:"Specification",routerLink:"/specification",target:""},{id:2,name:"Cart",routerLink:"/cart",target:"_blank"}],this.active=0,this.isDealer=!0,this.dealerName="Furniture Dealer",this.projectName="No Project Selected",this.userDetails=null,n.events.subscribe({next:r=>{r instanceof c.m2&&(this.url=r.url,this.active=r.url.includes("cart")?2:r.url.includes("externallinks")?3:1,r.url.includes("catalogue")&&this.mainService._storageService.setItem("prev_route",r.url))}}),this.busService.getSendShowCart().subscribe({next:r=>{console.log("bus"),this.getCart()}})}getCart(){this.mainService.getCartItemsByUserIDProjectIDAndManufacturingCompany(this.userDetails.id,this.userDetails.projectID,"").subscribe({next:n=>{n&&n.data&&(this.cartQty=n.data.length,this.cart=n.data)}})}goToPage(n){if(!this.url.includes(n))switch(n){case"specification":let e=this.mainService._storageService.getItem("prev_route")?this.mainService._storageService.getItem("prev_route"):"specification";this.router.navigateByUrl(e);break;case"cart":this.router.navigateByUrl("/cart");break;case"externallinks":this.router.navigateByUrl("/externallinks")}}setDealerAndProjectName(){if("user"in localStorage){this.userDetails.dealers_id&&(this.isDealer=!1);let n=this.userDetails.DealerName;n&&""!=n&&(this.dealerName=n);let e=this.userDetails.projectName;e&&""!=e&&(this.projectName=e)}}ngOnInit(){this.userDetails=this.mainService._storageService.getItem("user"),this.userDetails=JSON.parse(this.userDetails),this.getCart(),this.setDealerAndProjectName()}ngOnDestroy(){}}y.\u0275fac=function(n){return new(n||y)(t.Y36(c.F0),t.Y36(u),t.Y36(p.Ye),t.Y36(S.Z))},y.\u0275cmp=t.Xpm({type:y,selectors:[["app-main"]],decls:13,vars:16,consts:[[1,"container-fluid","h-100"],[1,"row","h-100"],[1,"col-12","px-0"],[1,"d-flex","justify-content-between","h-100"],[2,"max-width","300px",3,"ngbCollapse","horizontal","ngbCollapseChange"],["sidebarCollapse","ngbCollapse"],["style","width: 300px","class","h-100",4,"ngIf"],[1,"flex-fill",3,"ngClass"],[3,"cartQty","cart","url","isDealer","toggleCollapse"],["class","d-flex justify-content-between px-3",4,"ngIf"],["class","tab-row pt-1",4,"ngIf"],[1,"h-100",2,"width","300px"],[3,"cartQty"],[1,"d-flex","justify-content-between","px-3"],[1,"mt-2"],[3,"icon"],[1,"text-muted"],[1,"tab-row","pt-1"],[1,"col-md-4","px-0","py-2","tab","text-center",3,"ngClass","click"]],template:function(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4,5),t.NdJ("ngbCollapseChange",function(r){return e.isCollapsed=r}),t.YNc(6,H,2,1,"div",6),t.qZA(),t.TgZ(7,"div",7)(8,"app-header",8),t.NdJ("toggleCollapse",function(){t.CHM(o);const r=t.MAs(5);return t.KtG(r.toggle())}),t.qZA(),t.YNc(9,Y,19,6,"div",9),t.YNc(10,$,7,4,"div",10),t._UZ(11,"router-outlet"),t.qZA()(),t._UZ(12,"app-footer"),t.qZA()()()}2&n&&(t.xp6(4),t.ekj("d-none",e.isDealer||e.url.includes("externallinks")),t.Q6J("ngbCollapse",e.isCollapsed)("horizontal",!0),t.xp6(2),t.Q6J("ngIf",!e.isDealer),t.xp6(1),t.Q6J("ngClass",t.kEZ(12,q,e.url.includes("catalogue"),e.url.includes("specification")||e.url.includes("checkout"),e.url.includes("cart"))),t.xp6(1),t.Q6J("cartQty",e.cartQty)("cart",e.cart)("url",e.url)("isDealer",e.isDealer),t.xp6(1),t.Q6J("ngIf",e.url.includes("catalogue")),t.xp6(1),t.Q6J("ngIf",(e.url.includes("catalogue")||e.url.includes("cart")||e.url.includes("externallinks"))&&!e.isDealer))},dependencies:[p.mk,p.O5,d._D,E.BN,c.lC,C,v,b],styles:[".tab-row[_ngcontent-%COMP%]{color:#f5f5f5;display:flex;flex-wrap:wrap;justify-content:space-around;flex-direction:row-reverse}.tab-row[_ngcontent-%COMP%]   .tab-last[_ngcontent-%COMP%]{border:none!important}.tab-row[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{font-size:18px;font-weight:700;border-right:2px solid #fff;border-radius:15px 15px 0 0}.tab-row[_ngcontent-%COMP%]   .tab-active[_ngcontent-%COMP%], .tab-row[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{background:whitesmoke;color:#000;border-radius:15px 15px 0 0;cursor:pointer}.tab-row[_ngcontent-%COMP%]   .tab-active[_ngcontent-%COMP%] + .tab[_ngcontent-%COMP%], .tab-row[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover + .tab[_ngcontent-%COMP%]{border:none!important}"]});const G=[{path:"",component:y,children:[{path:"specification",loadChildren:()=>Promise.all([s.e(592),s.e(982)]).then(s.bind(s,8982)).then(a=>a.SpecificationModule)},{path:"specification/:company",loadChildren:()=>Promise.all([s.e(592),s.e(982)]).then(s.bind(s,8982)).then(a=>a.SpecificationModule)},{path:"catalogue/:company",loadChildren:()=>Promise.all([s.e(592),s.e(672)]).then(s.bind(s,2672)).then(a=>a.CatalogueModule)},{path:"cart",loadChildren:()=>Promise.all([s.e(592),s.e(515)]).then(s.bind(s,2515)).then(a=>a.CartModule)},{path:"externallinks",loadChildren:()=>s.e(393).then(s.bind(s,1393)).then(a=>a.ExternalLinksModule)},{path:"",pathMatch:"full",redirectTo:"specification"}]}];class h{}h.\u0275fac=function(n){return new(n||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[c.Bz.forChild(G),c.Bz]});var K=s(7929);class f{}f.\u0275fac=function(n){return new(n||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({providers:[u],imports:[p.ez,K.m,h]})},6916:(M,T,s)=>{s.d(T,{Z:()=>l});var p=s(7579),c=s(1571);class l{constructor(){this.cartEvent=new p.x}sendShowCart(){this.cartEvent.next("")}getSendShowCart(){return this.cartEvent.asObservable()}}l.\u0275fac=function(x){return new(x||l)},l.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}}]);