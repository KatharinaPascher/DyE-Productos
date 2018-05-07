webpackJsonp([7],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl, menu, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        /**Registro con correo y contraseña */
        this.user = { email: '', password: '' };
        this.menu = menu;
        this.menu.swipeEnable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.auth.loginUser(this.user.email, this.user.password).then(function (user) {
            //Sesión iniciada correctamente
            var toast = _this.toastCtrl.create({
                message: 'Bienvenido ' + _this.user.email,
                duration: 1000,
                position: 'middle'
            });
            toast.present();
            _this.menu.swipeEnable(true);
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content class = "login-container">\n\n\n\n\n\n  <div class= "list-container">\n\n  <ion-list >\n\n\n\n    <ion-item>\n\n      <ion-label floating>Correo</ion-label>\n\n      \n\n      <ion-input\n\n        [(ngModel)]="user.email"\n\n        name="email"\n\n        type="text"\n\n        autocapitalize="off"\n\n        required\n\n      >\n\n      </ion-input>\n\n\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n     \n\n      <ion-label floating>Contraseña</ion-label>\n\n      \n\n      <ion-input\n\n        [(ngModel)]="user.password"\n\n        name="password"\n\n        type="password"\n\n        required\n\n      >\n\n      </ion-input>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n  </div>\n\n\n\n  <section class="loginButton-container">\n\n  <div padding>\n\n    <button ion-button color="primary" block (click)="login()">Iniciar Sesión</button>\n\n    <button ion-button color="secondary" block (click)="register()">Registrarse</button>\n\n  </div>\n\n</section>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(naController, navParams) {
        this.naController = naController;
        this.navParams = navParams;
    }
    HomePage.prototype.likeButton = function () {
        this.naController.setRoot(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\home\home.html"*/'<ion-header>\n\n  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <section class = "home-container">\n\n      \n\n    <img width="220" height="220" object-fit= "fill"  \n\n    src="../assets/foodpics/Brisket Panini, Cote Sud, 04 93 95 89 44, 2 Place Mejanne, 06560 Sophia Antipolis, France.png"> \n\n\n\n    </section>\n\n\n\n    <section class = "home-dislike">\n\n      \n\n            <img width="90" height="90" object-fit= "fill"  \n\n            src="../assets/imgs/DISLIKE.jpg"> \n\n            <button ion-button  clear></button>\n\n\n\n          \n\n        \n\n            </section>\n\n           \n\n    <section class = "home-like">\n\n      \n\n                    \n\n        \n\n                    <img width="90" height="90" object-fit= "fill"  \n\n                    src="../assets/imgs/Thumbsup.jpg"> \n\n                    <button ion-button clear (click) = "likeButton()"></button>\n\n                \n\n                    </section>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\detail\detail.html"*/'<!--\n\n  Generated template for the DetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n   \n\n    <section class = "detail-container">\n\n    \n\n        <img width="120" height="120" object-fit= "fill" \n\n        src="../assets/foodpics/Brisket Panini, Cote Sud, 04 93 95 89 44, 2 Place Mejanne, 06560 Sophia Antipolis, France.png"> \n\n   \n\n</section>\n\n<section class = "detail-container-titel">\n\n    Brisket Panini\n\n\n\n  </section>\n\n      <section class = "detail-container-text">\n\n          Corte Ingles <br>\n\n          Calle de la Princesa, 56, \n\n          28008 Madrid <br>\n\n          Spain\n\n\n\n        </section>\n\n\n\n        <section class = "detail-container-hours">\n\n          <b>\n\n           Mo-Fr : 09.40 - 18.30\n\n           Sa,Su : 10.00 - 22.00\n\n          </b>\n\n          </section>\n\n          <section class = "detail-container-price">\n\n              12,30€\n\n    \n\n            </section>\n\n\n\n <section class = "detail-container-logos">\n\n    <ion-icon  name="logo-twitter" item-start></ion-icon>\n\n    <ion-icon padding="0,5px" name="logo-facebook" item-start></ion-icon>\n\n    <ion-icon  name="logo-instagram" item-start></ion-icon>\n\n    <ion-icon  padding="0,5px" name="star" item-start></ion-icon>\n\n \n\n  </section>\n\n\n\n    <section class = "detail-container-number">\n\n        <img  width="40" height="40" object-fit= "fill" \n\n        src="../assets/imgs/PhoneIcon copy.jpg">  \n\n    </section>\n\n       \n\n   <section class = "detail-container-link">\n\n    <a ion-item href="https://www.google.com">\n\n      www.bistro.com\n\n    </a>\n\n        \n\n     \n\n      </section>\n\n      <section class = "detail-container-maps">\n\n          <div id="map">My map will go here</div>\n\n       \n\n        </section>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AllergiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllergiesPage = /** @class */ (function () {
    function AllergiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllergiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllergiesPage');
    };
    AllergiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-allergies',template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\allergies\allergies.html"*/'<!--\n\n  Generated template for the AllergiesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label>Vegan</ion-label>\n\n          <ion-checkbox [(ngModel)]="vegan"></ion-checkbox>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label>Gluten-Free</ion-label>\n\n          <ion-checkbox [(ngModel)]="glutenfree" ></ion-checkbox>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label>Vegetarian</ion-label>\n\n          <ion-checkbox [(ngModel)]="vegetarian"></ion-checkbox>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\allergies\allergies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AllergiesPage);
    return AllergiesPage;
}());

//# sourceMappingURL=allergies.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DistancePage = /** @class */ (function () {
    function DistancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DistancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DistancePage');
    };
    DistancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-distance',template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\distance\distance.html"*/'<!--\n\n  Generated template for the DistancePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n \n\n\n\n  </ion-header>\n\n  \n\n  \n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n  \n\n  \n\n      <ion-item>\n\n          <ion-label>Distance in Km</ion-label>\n\n        <ion-range min="0" max="150" [(ngModel)]="singleValue" color="danger" pin="true">\n\n          <ion-label range-left>0</ion-label>\n\n          <ion-label range-right>150</ion-label>\n\n        </ion-range>\n\n      </ion-item>\n\n    \n\n   \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\distance\distance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DistancePage);
    return DistancePage;
}());

//# sourceMappingURL=distance.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodPage = /** @class */ (function () {
    function FoodPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FoodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodPage');
    };
    FoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food',template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\food\food.html"*/'<!--\n\n  Generated template for the FoodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label>Italian</ion-label>\n\n          <ion-checkbox [(ngModel)]="italien"></ion-checkbox>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label>Spanish</ion-label>\n\n          <ion-checkbox [(ngModel)]="spanish" ></ion-checkbox>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label>Mediterranean</ion-label>\n\n          <ion-checkbox [(ngModel)]="mediterranean"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Chinese</ion-label>\n\n            <ion-checkbox [(ngModel)]="chinese"></ion-checkbox>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label>Japanese</ion-label>\n\n              <ion-checkbox [(ngModel)]="japanese"></ion-checkbox>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Ethiopean</ion-label>\n\n                <ion-checkbox [(ngModel)]="ethiopean"></ion-checkbox>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label>Tex-Mex</ion-label>\n\n                  <ion-checkbox [(ngModel)]="tex-mex"></ion-checkbox>\n\n                </ion-item>\n\n\n\n            <ion-item>\n\n                    <ion-label>Corean</ion-label>\n\n                    <ion-checkbox [(ngModel)]="corean"></ion-checkbox>\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                      <ion-label>Argentinian</ion-label>\n\n                      <ion-checkbox [(ngModel)]="argentinian"></ion-checkbox>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-label>Peruvian</ion-label>\n\n                        <ion-checkbox [(ngModel)]="peruvian"></ion-checkbox>\n\n                      </ion-item>\n\n\n\n                      <ion-item>\n\n                          <ion-label>Arabic</ion-label>\n\n                          <ion-checkbox [(ngModel)]="arabic"></ion-checkbox>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                            <ion-label>Fast Food</ion-label>\n\n                            <ion-checkbox [(ngModel)]="fastfood"></ion-checkbox>\n\n                          </ion-item>\n\n                          <ion-item>\n\n                              <ion-label>Greek</ion-label>\n\n                              <ion-checkbox [(ngModel)]="greek"></ion-checkbox>\n\n                            </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\food\food.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FoodPage);
    return FoodPage;
}());

//# sourceMappingURL=food.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, auth, alertCtrl, menu, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        /**Registro con correo y contraseña */
        this.user = { email: '', password: '' };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    // Registro de usuario
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.auth.registerUser(this.user.email, this.user.password)
            .then(function (user) {
            // El usuario se ha creado correctamente
            var toast = _this.toastCtrl.create({
                message: 'Usuario ' + _this.user.email + ' creado',
                duration: 1000,
                position: 'middle'
            });
            toast.present();
            _this.menu.swipeEnable(true);
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Formulario de Registro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class = "login-container">\n\n  <div class= "list-container">\n\n    \n\n  <ion-list> \n\n\n\n    <ion-item> \n\n      <ion-label floating>Correo</ion-label> \n\n      \n\n      <ion-input\n\n          [(ngModel)]="user.email"\n\n          name="email"\n\n          type="text"\n\n          autocapitalize="off"\n\n          required\n\n        >\n\n        </ion-input>\n\n\n\n    </ion-item>\n\n \n\n    <ion-item>  \n\n      <ion-label floating>Contraseña</ion-label>      \n\n      \n\n      <ion-input\n\n          [(ngModel)]="user.password"\n\n          name="password"\n\n          type="password"\n\n          required\n\n        >  \n\n      </ion-input>\n\n\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</div>\n\n<section class="registerButton-container">\n\n  <div padding>\n\n    <button ion-button color="primary" block (click)=\'register()\'>Register</button>\n\n  </div>\n\n</section>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PricePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PricePage = /** @class */ (function () {
    function PricePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PricePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PricePage');
    };
    PricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-price',template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\price\price.html"*/'<!--\n\n  Generated template for the PricePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n \n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n    <ion-item>\n\n        <ion-label>Price</ion-label>\n\n      <ion-range min="0" max="200" [(ngModel)]="singleValue" color="danger" pin="true">\n\n        <ion-label range-left>0</ion-label>\n\n        <ion-label range-right>200</ion-label>\n\n      </ion-range>\n\n    </ion-item>\n\n  \n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\price\price.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PricePage);
    return PricePage;
}());

//# sourceMappingURL=price.js.map

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/allergies/allergies.module": [
		450,
		6
	],
	"../pages/detail/detail.module": [
		449,
		5
	],
	"../pages/distance/distance.module": [
		451,
		4
	],
	"../pages/food/food.module": [
		452,
		3
	],
	"../pages/login/login.module": [
		196
	],
	"../pages/price/price.module": [
		453,
		2
	],
	"../pages/register/register.module": [
		454,
		1
	],
	"../pages/settings/settings.module": [
		455,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favs_favs__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__favs_favs__["a" /* FavsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement="top" margin-top="0">\n\n  <ion-tab [root]="tab1Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n\n  <ion-tab [root]="tab2Root" ></ion-tab> !invisible \n\n  \n\n  <ion-tab [root]="tab3Root" tabTitle="Favorites" tabIcon="star"></ion-tab>\n\n</ion-tabs>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavsPage = /** @class */ (function () {
    function FavsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FavsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favs',template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\favs\favs.html"*/'<ion-header>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header >Your favorite dishes!</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="pasta" ></ion-icon>\n\n      Pasta\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="pizza" ></ion-icon>\n\n      Pizza\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="sushi" ></ion-icon>\n\n      Sushi\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\favs\favs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FavsPage);
    return FavsPage;
}());

//# sourceMappingURL=favs.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favs_favs__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_distance_distance__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_allergies_allergies__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_price_price__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_food_food__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















/** constante firebaseConfig con la información de nuestro api de firebase */
var firebaseConfig = {
    apiKey: "AIzaSyCQcpvZQUcXYWPY6Q9p--AFLsLRzDg8GrA",
    authDomain: "bbdd-cibo-login.firebaseapp.com",
    databaseURL: "https://bbdd-cibo-login.firebaseio.com",
    projectId: "bbdd-cibo-login",
    storageBucket: "",
    messagingSenderId: "93991556088"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_favs_favs__["a" /* FavsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_distance_distance__["a" /* DistancePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_allergies_allergies__["a" /* AllergiesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_price_price__["a" /* PricePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_food_food__["a" /* FoodPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allergies/allergies.module#AllergiesPageModule', name: 'AllergiesPage', segment: 'allergies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/distance/distance.module#DistancePageModule', name: 'DistancePage', segment: 'distance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food/food.module#FoodPageModule', name: 'FoodPage', segment: 'food', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/price/price.module#PricePageModule', name: 'PricePage', segment: 'price', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__["LoginPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_favs_favs__["a" /* FavsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_distance_distance__["a" /* DistancePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_allergies_allergies__["a" /* AllergiesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_price_price__["a" /* PricePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_food_food__["a" /* FoodPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__["a" /* DetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        this.auth.Session.subscribe(function (session) {
            if (session) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
            }
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    //Cerrar sesión
    MyApp.prototype.cerrarSesion = function () {
        this.auth.logout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\app\app.html"*/
        })
        //export class MyApp {
        // rootPage:any= TabsPage;
        // constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        // platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        //statusBar.styleDefault();
        // splashScreen.hide();
        //});
        // }
        //}
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
        console.log('Hello AuthProvider Provider Firebase');
    }
    // Registro de usuario
    AuthProvider.prototype.registerUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            // El usuario se ha creado correctamente.
        })
            .catch(function (err) { return Promise.reject(err); });
    };
    // Login de usuario
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    Object.defineProperty(AuthProvider.prototype, "Session", {
        // Devuelve la session
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    // Logout de usuario
    AuthProvider.prototype.logout = function () {
        this.afAuth.auth.signOut().then(function () {
            // hemos salido
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__distance_distance__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__price_price__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_food__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__allergies_allergies__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(naController, navParams, auth) {
        this.naController = naController;
        this.navParams = navParams;
        this.auth = auth;
    }
    SettingsPage.prototype.distanceButton = function () {
        this.naController.setRoot(__WEBPACK_IMPORTED_MODULE_2__distance_distance__["a" /* DistancePage */]);
    };
    SettingsPage.prototype.priceButton = function () {
        this.naController.setRoot(__WEBPACK_IMPORTED_MODULE_3__price_price__["a" /* PricePage */]);
    };
    SettingsPage.prototype.foodsButton = function () {
        this.naController.setRoot(__WEBPACK_IMPORTED_MODULE_4__food_food__["a" /* FoodPage */]);
    };
    SettingsPage.prototype.allergiesButton = function () {
        this.naController.setRoot(__WEBPACK_IMPORTED_MODULE_5__allergies_allergies__["a" /* AllergiesPage */]);
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.cerrarSesion = function () {
        //this.menu.toggle();
        this.auth.logout();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\settings\settings.html"*/'\n\n<ion-header>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n            <button ion-item (click) = "distanceButton()">\n\n                    <ion-icon name="walk" item-start></ion-icon>\n\n                    Distance\n\n                  </button>\n\n            <button ion-item (click) = "priceButton()">\n\n                    <ion-icon name="logo-euro" item-start></ion-icon>\n\n                     Price\n\n                     </button>\n\n             <button ion-item (click) = "foodsButton()">\n\n                     <ion-icon name="restaurant" item-start></ion-icon>\n\n                     Foods\n\n                    </button>\n\n             <button ion-item (click) = "allergiesButton()">\n\n                     <ion-icon name="leaf" item-start></ion-icon>\n\n                     Allergies and Preferences\n\n                    </button>\n\n             <button logout ion-item (click)="cerrarSesion()">\n\n                     <ion-icon name="exit" item-start></ion-icon>\n\n                     Cerrar Sesión\n\n                     </button>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joseh\Documents\Proyecto DEPI\DyE-Productos\Cibo\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map