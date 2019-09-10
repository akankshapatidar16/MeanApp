(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'start';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/authentication.service */ "./src/service/authentication.service.ts");
/* harmony import */ var _service_books_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../service/books.service */ "./src/service/books.service.ts");
/* harmony import */ var _service_signup_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service/signup.service */ "./src/service/signup.service.ts");
/* harmony import */ var _editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./editpopup/editpopup.component */ "./src/app/editpopup/editpopup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_11__["BookComponent"],
                _editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_15__["EditpopupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]
            ],
            providers: [_service_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"], _service_books_service__WEBPACK_IMPORTED_MODULE_13__["BooksService"], _service_signup_service__WEBPACK_IMPORTED_MODULE_14__["SignupService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_15__["EditpopupComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    },
    {
        path: 'books',
        component: _book_book_component__WEBPACK_IMPORTED_MODULE_5__["BookComponent"]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table,th,td{\r\n    border : 2px whitesmoke solid;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n}\r\n.card{\r\n    height: 2600px;\r\n    width: 1300px;\r\n    background-color: rgba(10, 10, 10, 0.5) !important;\r\n    align-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYm9vay9ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSx0aCx0ZHtcclxuICAgIGJvcmRlciA6IDJweCB3aGl0ZXNtb2tlIHNvbGlkO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6IDI2MDBweDtcclxuICAgIHdpZHRoOiAxMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIDAuNSkgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center h-100\">\n  <div class=\"card\">\n    <title>TABLE</title>\n    <table border=\"5\">\n      <thead>\n        <tr>\n          <td>author</td>\n          <td>country</td>\n          <td>language</td>\n          <td>title</td>\n          <td>year</td>\n          <td>&nbsp;</td>\n          <td>&nbsp;</td>\n        </tr>\n      </thead>\n      <tr *ngFor='let book of books'>\n        <td>{{book.author}}</td>\n        <td>{{book.country}}</td>\n        <td>{{book.language}}</td>\n        <td>{{book.title}}</td>\n        <td>{{book.year | suffixADorBC}}</td>\n        <td>\n          <button (click)=\"delete(book)\" class=\"fa fa-trash\"></button>\n        </td>\n        <td>\n          <button (click)=\"editBooksDialog(book)\" class=\"fa fa-edit\"></button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/books.service */ "./src/service/books.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/editpopup/editpopup.component */ "./src/app/editpopup/editpopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = /** @class */ (function () {
    function BookComponent(bookServe, diloge) {
        this.bookServe = bookServe;
        this.diloge = diloge;
    }
    BookComponent.prototype.ngOnInit = function () {
        this.loadBooks();
    };
    BookComponent.prototype.delete = function (book) {
        var _this = this;
        this.bookServe.deleteBooks(book).subscribe(function (res) {
            console.log(res);
            _this.books = _this.books.filter(function (books) { return books !== book; });
        });
    };
    BookComponent.prototype.loadBooks = function () {
        var _this = this;
        this.bookServe.books().subscribe(function (res) {
            _this.books = res.json();
        });
    };
    BookComponent.prototype.editBooksDialog = function (book) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = book;
        var dialogRef = this.diloge.open(_app_editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_3__["EditpopupComponent"], dialogConfig);
        var sub = dialogRef.componentInstance.updated.subscribe(function () {
            console.log('inside onupdated');
            _this.loadBooks();
        });
        dialogRef.afterClosed().subscribe(function () {
            /*console.log('loading books')
            this.loadBooks();*/
        });
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_service_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/editpopup/editpopup.component.css":
/*!***************************************************!*\
  !*** ./src/app/editpopup/editpopup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#label{\r\n    color: whitesmoke;\r\n}\r\n\r\n#button{\r\n    background-color:whitesmoke;\r\n    box-shadow: 0 3px;\r\n    border-radius: 5px;\r\n    width: 20%;\r\n    padding: 0px;\r\n    border: 1px solid black;\r\n    display: inline-block;\r\n}\r\n\r\n.card{\r\n    height: 500px;\r\n    width: 500px;\r\n    background-color: rgba(5, 5, 5, 0.664) !important;\r\n    align-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHBvcHVwL2VkaXRwb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpREFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZWRpdHBvcHVwL2VkaXRwb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xhYmVse1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbiNidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCA1LCA1LCAwLjY2NCkgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/editpopup/editpopup.component.html":
/*!****************************************************!*\
  !*** ./src/app/editpopup/editpopup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n \n    <div class=\"card\">\n      <label id=\"label\">\n        author:<input type=\"text\" class=\"form-control\" name=\"author\" [(ngModel)]=\"item.author\" /><br>\n        country:<input type=\"text\" class=\"form-control\" name=\"country\" [(ngModel)]=\"item.country\" /><br>\n        language:<input type=\"text\" class=\"form-control\" name=\"language\" [(ngModel)]=\"item.language\" /><br>\n        title:<input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"item.title\" /><br>\n        year:<input type=\"text\" class=\"form-control\" name=\"year\" [(ngModel)]=\"item.year\" /><br>\n      </label>\n      <button id=\"button\" mat-button (click)='onClickOk(item)' [mat-dialog-close]=\"true\">OK</button><br>\n      <button id=\"button\" mat-button mat-dialog-close>Cancel</button>\n\n    </div>\n</body>"

/***/ }),

/***/ "./src/app/editpopup/editpopup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/editpopup/editpopup.component.ts ***!
  \**************************************************/
/*! exports provided: EditpopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpopupComponent", function() { return EditpopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/books.service */ "./src/service/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditpopupComponent = /** @class */ (function () {
    function EditpopupComponent(bookService, dialogRef, data) {
        this.bookService = bookService;
        this.dialogRef = dialogRef;
        this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.item = JSON.parse(JSON.stringify(data));
    }
    EditpopupComponent.prototype.ngOnInit = function () {
    };
    EditpopupComponent.prototype.onClickOk = function (updatedBook) {
        var _this = this;
        var bookSansID = Object.assign({}, updatedBook);
        delete bookSansID._id;
        //console.log(clone)
        this.bookService.updateBooks(updatedBook._id, bookSansID).subscribe(function (res) {
            if (res.ok == true) {
                console.log('emiting');
                _this.updated.emit('updated');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditpopupComponent.prototype, "updated", void 0);
    EditpopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editpopup',
            template: __webpack_require__(/*! ./editpopup.component.html */ "./src/app/editpopup/editpopup.component.html"),
            styles: [__webpack_require__(/*! ./editpopup.component.css */ "./src/app/editpopup/editpopup.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_service_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditpopupComponent);
    return EditpopupComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer\r\n{\r\nposition : absolute;\r\nright :0;\r\nbottom : 0;\r\nleft :0;\r\npadding : 1px;\r\ntext-align : center;\r\ncolor : black;\r\nbackground-color: whitesmoke;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLG1CQUFtQjtBQUNuQixRQUFRO0FBQ1IsVUFBVTtBQUNWLE9BQU87QUFDUCxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYiw0QkFBNEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyXHJcbntcclxucG9zaXRpb24gOiBhYnNvbHV0ZTtcclxucmlnaHQgOjA7XHJcbmJvdHRvbSA6IDA7XHJcbmxlZnQgOjA7XHJcbnBhZGRpbmcgOiAxcHg7XHJcbnRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbmNvbG9yIDogYmxhY2s7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  Library @copyright 2010-2020 |\n  <a href=\"https://www.google.com\">terms & condition</a>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n    text-align: center;\r\n    padding: 50px;\r\n    right: 0;\r\n    left:0;\r\n    background: transparent;\r\n    text-shadow: black 0.4em 0.4em 0.4em;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0lBQ1IsTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixvQ0FBb0M7R0FDckMiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDowO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMC40ZW0gMC40ZW0gMC40ZW07XHJcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div>\n        <a href=\"http://localhost:4200\" style=\"color:white\">\n            <h3>Welcome to the Library</h3>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home{\r\n    color:whitesmoke;\r\n    text-align: center;\r\n    text-shadow: black 0.4em 0.4em 0.4em ;\r\n}\r\n\r\n.card{\r\n    height: 450px;\r\n    width: 500px;\r\n    background-color: rgba(10, 10, 10, 0.5) !important;\r\n    align-content: center;\r\n}\r\n\r\n#b1:hover{\r\nbackground-color:whitesmoke;\r\nbox-shadow: 0 3px;\r\nborder-radius: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0RBQWtEO0lBQ2xELHFCQUFxQjtBQUN6Qjs7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXtcclxuICAgIGNvbG9yOndoaXRlc21va2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMC40ZW0gMC40ZW0gMC40ZW0gO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIDAuNSkgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jYjE6aG92ZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcclxuYm94LXNoYWRvdzogMCAzcHg7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<body>\n        <div class=\"d-flex justify-content-center h-100\">\n            <div class=\"card\">\n                <form>\n                    <div class=home>\n                        <h4>Please create your account</h4>\n                        <button id=\"b1\" routerLink=\"/signup\" >SignUp</button><br><br>\n                        <h4>After create account go to the login page</h4>\n                        <button id=\"b1\" routerLink=\"/login\">Login</button><br><br>\n                    </div>\n                </form>\n            </div>\n        </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#h2 {\r\n    text-align: center;\r\n    color: whitesmoke;\r\n    text-shadow: black 0.4em 0.4em 0.4em ;\r\n}\r\n\r\n#h5{\r\n    color:whitesmoke;\r\n   \r\n}\r\n\r\ninput[type=\"text\"],[type=\"password\"]{\r\n    text-align: center;\r\n    width:50%;\r\n    padding: 0px;\r\n}\r\n\r\n#button{\r\n    background-color:whitesmoke;\r\n    box-shadow: 0 3px;\r\n    border-radius: 5px;\r\n    width: 20%;\r\n    padding: 0px;\r\n    border: 1px solid black;\r\n    display: inline-block;\r\n}\r\n\r\n.card{\r\n    height: 452px;\r\n    width: 500px;\r\n    background-color: rgba(10, 10, 10, 0.5) !important;\r\n    align-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtEQUFrRDtJQUNsRCxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHRleHQtc2hhZG93OiBibGFjayAwLjRlbSAwLjRlbSAwLjRlbSA7XHJcbn1cclxuXHJcbiNoNXtcclxuICAgIGNvbG9yOndoaXRlc21va2U7XHJcbiAgIFxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxbdHlwZT1cInBhc3N3b3JkXCJde1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4jYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6IDQ1MnB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n    <title>LOGIN PAGE</title>\n</head>\n\n<body>\n    <div class=\"d-flex justify-content-center h-100\">\n        <div class=\"card\">\n            <h2 id='h2'>LOGIN PAGE</h2>\n            <div align = \"center\">\n                <h5 id=\"h5\">\n                    <span *ngIf=\"authfailure\">Authentication fail please check username and password!!!</span>\n                </h5>\n            </div>\n            <div align = \"center\">\n                <h5 id='h5'>\n                    <span><i class=\"fa fa-user\"></i></span>Username\n                    <input type=\"text\" authofocus=\"authofocus\" class=\"form-control\" placeholder=\"Enter Username \" name=\"Username\"\n                        [(ngModel)]=\"username\">\n                </h5>\n                <h5 id='h5'>\n                    <span><i class=\"fa fa-key\"></i></span> Password\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" name=\"password\"\n                        [(ngModel)]=\"password\" /><br>\n                </h5>\n                <button id=\"button\" class=\"form-control\" (click)=\"onLoginClick()\" [disabled]=\"isLoginDisable\"\n                    [style.color]=\"color\">Submit</button><br><br>\n                <h5 id='h5'>\n                    <input type=\"checkbox\" checkbox=\"checked\" name=\"remember\" />Remember me\n                </h5><br><br>\n                <h5 id='h5'>\n                    Forgot <a href=\"https://www.google.com\">password?</a>\n                </h5>\n                <h5 id='h5'>\n                    <a href=\"http://localhost:4200/signup\">Don't have an account?</a>\n                </h5>\n            </div>\n        </div>\n    </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authServe, router) {
        this.authServe = authServe;
        this.router = router;
        this.authfailure = false;
        this.color = "black";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.username = "dinky16";
        this.password = "1234";
        this.isLoginDisable = false;
    };
    LoginComponent.prototype.onLoginClick = function () {
        var _this = this;
        this.user = {
            "username": this.username,
            "password": this.password
        };
        //console.log(this.user)
        this.authServe.authenticate(this.user).subscribe(function (response) {
            console.log(response.json());
            var result = response.json();
            if (result.authenticate) {
                _this.authfailure = false;
                _this.router.navigate(["books"]);
            }
            else {
                _this.authfailure = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#h5{\r\n    color:whitesmoke;\r\n}\r\n\r\ninput[type=\"text\"],[type=\"password\"],\r\n[name=\"country\"]{\r\n    text-align: center;\r\n    font-family: \"Times New Roman\", Times, serif;\r\n    width: 50%;\r\n    padding: 0px;\r\n    border: 1px solid black;\r\n}\r\n\r\n#button {\r\n    background-color: whitesmoke;\r\n    width: 20%;\r\n    padding: 5px;\r\n    border: 1px solid black;\r\n\r\n}\r\n\r\n.card{\r\n    height: 452px;\r\n    width: 500px;\r\n    background-color: rgba(10, 10, 10, 0.5) !important;\r\n    align-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osa0RBQWtEO0lBQ2xELHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jaDV7XHJcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG5bbmFtZT1cImNvdW50cnlcIl17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGhlaWdodDogNDUycHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIDAuNSkgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n    <title>Welcome to signup page</title>\n</head>\n\n<body>\n    <div class=\"d-flex justify-content-center h-100\">\n        <div class=\"card\">\n            <div align = \"center\">\n            <h5 id='h5'>Firstname\n                <input type=\"text\" autofocus=\"autofocus\" placeholder=\"Enter firstname\" name=\"firstname\" [(ngModel)]=\"firstname\">\n            </h5>\n            <h5 id='h5'>Lastname\n                <input type=\"text\" placeholder=\"Enter lastname\" name=\"lastname\" [(ngModel)]=\"lastname\">\n            </h5>\n            <h5 id='h5'>Emailid\n                <input type=\"text\" placeholder=\"Enter email id\" email=\"email\" [(ngModel)]=\"email\">\n            </h5>\n            <h5 id='h5'>Username\n                <input type=\"text\" placeholder=\"Enter Username\" name=\"username\" [(ngModel)]=\"Username\">\n            </h5>\n            <h5 id='h5'>Password\n                <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" [(ngModel)]=\"password\">\n            </h5>\n            <h5 id='h5'>Gender\n                <input type=\"radio\" name=\"gender\" [(ngModel)]=\"gender\" value=\"male\" />Male\n                <input type=\"radio\" name=\"gender\" [(ngModel)]=\"gender\" value=\"female\" />Female\n                <input type=\"radio\" name=\"gender\" [(ngModel)]=\"gender\" value=\"other\" />Other\n            </h5>\n            <h5 id='h5'>Country\n                <select name=\"country\" placeholder=\"Select Country\" [(ngModel)]=\"country\">\n                    <option value=\"Brazil\">Brazil</option>\n                    <option value=\"cuba\">Cuba</option>\n                    <option value=\"India\">India</option>\n                    <option value=\"Nepal\">Nepal</option>\n                    <option value=\"russia\">Russia</option>\n                </select></h5>\n            <h5 id='h5'>Pincode\n                <input type=\"text\" placeholder=\"Enter pincode\" pin=\"pincode\" [(ngModel)]=\"pincode\"><br>\n            </h5>\n            <h5 id='h5'>\n                <input type=\"checkbox\" checkbox=\"checked\" name=\"remember\" />Agree to <a\n                    href=\"https://www.google.com\">terms&condition</a>\n            </h5>\n            <button id=\"button\" (click)=\"onSignupClick()\">Submit</button>\n        </div>\n        </div>\n    </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/signup.service */ "./src/service/signup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupServe, router) {
        this.signupServe = signupServe;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        /*this.firstname = "akanksha"
        this.lastname = "patidar"
        this.email = "akankshapatidar16@gmail.com"
        this.pincode = "458553"*/
    };
    SignupComponent.prototype.onSignupClick = function () {
        var _this = this;
        this.user = {
            "firstname": this.firstname,
            "lastname": this.lastname,
            "email": this.email,
            "username": this.Username,
            "password": this.password,
            "gender": this.gender,
            "country": this.country,
            "pincode": this.pincode
        };
        //console.log(this.user);
        this.signupServe.signup(this.user).subscribe(function (res) {
            console.log(res.status);
            if (res.status != 201)
                console.log("registration fail");
            else {
                _this.router.navigate(["login"]);
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_service_signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    apiurl: 'http://localhost:4000/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ "./src/service/authentication.service.ts":
/*!***********************************************!*\
  !*** ./src/service/authentication.service.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.apiurl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiurl;
    }
    AuthenticationService.prototype.authenticate = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-type', 'application/json');
        var url = this.apiurl + 'user/authenticate';
        return this.http.post(url, user, { headers: headers });
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/service/books.service.ts":
/*!**************************************!*\
  !*** ./src/service/books.service.ts ***!
  \**************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = /** @class */ (function () {
    function BooksService(http) {
        this.http = http;
        this.apiurl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiurl;
    }
    BooksService.prototype.books = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('content-type', 'application/json');
        var url = this.apiurl + 'books?country=India';
        console.log(url);
        return this.http.get(url, { headers: headers });
    };
    BooksService.prototype.deleteBooks = function (book) {
        var id = book._id;
        console.log(id);
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append('content-type', 'application/json');
        var url = this.apiurl + 'books/' + id;
        console.log(url);
        return this.http.delete(url);
    };
    BooksService.prototype.updateBooks = function (id, book) {
        var url = this.apiurl + '/books/' + id;
        console.log("booksUrl", url);
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"];
        header.append('content-type', 'application/json');
        return this.http.put(url, book, { headers: header });
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/service/signup.service.ts":
/*!***************************************!*\
  !*** ./src/service/signup.service.ts ***!
  \***************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
        this.apiurl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiurl;
    }
    SignupService.prototype.signup = function (user) {
        //console.log("signup service is running")
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('content-type', 'application/json');
        var url = this.apiurl + 'user/signup';
        return this.http.post(url, user, { headers: headers });
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MeanApp\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map