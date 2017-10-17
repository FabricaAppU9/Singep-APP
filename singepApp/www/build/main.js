webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\rodol\Documents\Ionic\myApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\rodol\Documents\Ionic\myApp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.restaurante = {
            nome: "aa",
            endereco: {
                rua: "bb Aruaru",
                numero: "12",
                bairro: "Parque Martins"
            },
            especialidade: "Fast Food"
        };
        this.restaurantes = [
            {
                nome: "Rodolfo",
                endereco: {
                    rua: "Travessa Aruaru",
                    numero: "12",
                    bairro: "Parque Martins"
                },
                especialidade: "Fast Food"
            },
            {
                nome: "Matheus",
                endereco: {
                    rua: "Travessa Aruaru",
                    numero: "12",
                    bairro: "Parque Martins"
                },
                especialidade: "Fast Food"
            },
            {
                nome: "Maiko",
                endereco: {
                    rua: "Travessa Aruaru",
                    numero: "12",
                    bairro: "Parque Martins"
                },
                especialidade: "Fast Food"
            }
        ];
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\rodol\Documents\Ionic\myApp\src\pages\about\about.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>Restaurante</ion-title>\n  </ion-navbar>\n</ion-header>\n<br><br>\n\n<ion-content>\n \n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante1.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Praça de Alimentação Uninove</h3>\n      <p class="TextDescri">Subsolo do prédio</p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante2.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Burger King</h3>\n      <p class="TextDescri"><b>Av. Liberdade, 587 (750m)</b></p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante3.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Subway</h3>\n      <p class="TextDescri"><b>Praça da Liberdade, 180 (1km)</b></p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante4.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Habib´s</h3>\n      <p class="TextDescri"><b>Av. da Liberdade, 1070 (290m)</b></p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n    \n     <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante5.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Franz Café</h3>\n      <p class="TextDescri"><b>Rua Tamandaré, 744 (600m)</b></p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante6.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Jasmim Chinese</h3>\n      <p class="TextDescri"><b>R. Galvão Bueno, 700 (750m)</b></p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante7.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Espaço Vergueiro</h3>\n      <p class="TextDescri">(Restaurante self-service. Gastronomia variada casual em self-service com opções caseiras, vegetarianas, e mesas em pátio a céu aberto).<br></p>\n      <p class="TextDescri"><b>Rua Vergueiro, 803 (650m)</b>\n</p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante8.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Sukiya</h3>\n      <p class="TextDescri">(A gastronomia tradicional do Japão com pegada de lanchonete servida em cadeia japonesa de comida expressa).</p>\n        <p class="TextDescri"><b>Rua Vergueiro, 20 (260m)</b></p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante9.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Hinode</h3>\n      <p class="TextDescri">(O restaurante oferece pratos diversos da gastronomia japonesa,em ambiente moderno, simples e acolhedor).</p>\n         <p class="TextDescri"><b>R. Thomaz Gonzaga, 62 (900m)</b> </p>\n\n        \n <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante10.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Ponto Chic</h3>\n      <p class="TextDescri">(Lanches, sucos, shakes e pratos diversos servidos em mesas nesta lanchonete famosa por ter criado o bauru).</p>\n      <p class="TextDescri"><b>Praça Oswaldo Cruz (1,3Km)</b></p>\n\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante11.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Bar e Restaurante Limoeiro</h3>\n      <p class="TextDescri"><b>Vergueiro, 883 (750m)</b></p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante12.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Charme da Vergueiro</h3>\n      <p class="TextDescri"><b>Rua Vergueiro, 54 (230m)</b></p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante13.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Viena</h3>\n      <p class="TextDescri">(Pratos seletos da cozinha brasileira e grelhados, em rede expressa com balcão de café, lanches e sobremesas)</p>\n      <p class="TextDescri"><b>Prédio AC Camargo - R. Prof. Antônio Prudente, 211 (280m)</b></p>\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante14.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Alcachofra Restaurante</h3>\n      <p class="TextDescri">(self-service)</p>\n      <p class="TextDescri"><b>Rua Tamandaré, 914 (450m)</b></p>\n      \n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante15.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Chaleiras Grill</h3>\n      <p class="TextDescri">(Espaço self-service informal oferece saladas e pratos quentes, além do churrasco).</p>\n      <p class="TextDescri"><b>R. Castro Alves, 203 (500m)</b></p>\n      \n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/images/restaurante16.png">\n      </ion-thumbnail>\n\n      <h3 class="NomeRestaurante">Chaleiras Grill</h3>\n      <p class="TextDescri">(Espaço self-service informal oferece saladas e pratos quentes, além do churrasco).</p>\n      <p class="TextDescri"><b>R. Castro Alves, 203 (500m)</b></p>\n      \n\n\n      <!--<button ion-button clear item-end>Consultar</button>-->\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodol\Documents\Ionic\myApp\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\rodol\Documents\Ionic\myApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodol\Documents\Ionic\myApp\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\rodol\Documents\Ionic\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic! My apps</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rodol\Documents\Ionic\myApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\rodol\Documents\Ionic\myApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\rodol\Documents\Ionic\myApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map