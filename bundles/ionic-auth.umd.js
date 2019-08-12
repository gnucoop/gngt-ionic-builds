/**
 * @license
 * Copyright (C) 2018 Gnucoop soc. coop.
 *
 * This file is part of the Gnucoop Angular Toolkit (gngt).
 *
 * Gnucoop Angular Toolkit (gngt) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Gnucoop Angular Toolkit (gngt) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Gnucoop Angular Toolkit (gngt).  If not, see http://www.gnu.org/licenses/.
 *
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/common/http'), require('@angular/core'), require('@angular/forms'), require('@ionic/angular'), require('@ngx-translate/core'), require('@gngt/core/common'), require('@gngt/core/auth'), require('@gngt/ionic/common'), require('rxjs'), require('rxjs/operators'), require('@ngrx/store')) :
    typeof define === 'function' && define.amd ? define('@gngt/ionic/auth', ['exports', '@angular/common', '@angular/common/http', '@angular/core', '@angular/forms', '@ionic/angular', '@ngx-translate/core', '@gngt/core/common', '@gngt/core/auth', '@gngt/ionic/common', 'rxjs', 'rxjs/operators', '@ngrx/store'], factory) :
    (global = global || self, factory((global.gngt = global.gngt || {}, global.gngt.ionic = global.gngt.ionic || {}, global.gngt.ionic.auth = {}), global.ng.common, global.ng.common.http, global.ng.core, global.ng.forms, global.ionic.angular, global.ngxt.core, global.gngt.core.common, global.gngt.core.auth, global.gngt.ionic.common, global.rxjs, global.rxjs.operators, global.ngrx.store));
}(this, function (exports, common, http, core, forms, angular, core$1, common$1, auth, common$2, rxjs, operators, store) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthUserInteractionsService = /** @class */ (function (_super) {
        __extends(AuthUserInteractionsService, _super);
        function AuthUserInteractionsService(_ts, _alert, _toast) {
            var _this = _super.call(this) || this;
            _this._ts = _ts;
            _this._alert = _alert;
            _this._toast = _toast;
            return _this;
        }
        /**
         * @return {?}
         */
        AuthUserInteractionsService.prototype.askLogoutConfirm = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var strings = [
                'Are you sure you want to logout?',
                'Cancel',
                'Ok'
            ];
            return this._ts.get(strings).pipe(operators.switchMap((/**
             * @param {?} ts
             * @return {?}
             */
            function (ts) { return rxjs.from(_this._alert.create({
                message: ts[0],
                buttons: [{ text: ts[1], role: 'cancel' }, { text: ts[2], role: 'confirm' }]
            })); })), operators.switchMap((/**
             * @param {?} alert
             * @return {?}
             */
            function (alert) { return rxjs.from(alert.present()).pipe(operators.mapTo(alert)); })), operators.switchMap((/**
             * @param {?} alert
             * @return {?}
             */
            function (alert) { return rxjs.from(alert.onDidDismiss()); })), operators.map((/**
             * @param {?} evt
             * @return {?}
             */
            function (evt) { return evt.role === 'confirm'; })));
        };
        /**
         * @param {?} error
         * @return {?}
         */
        AuthUserInteractionsService.prototype.showLoginError = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            this._toast.create({
                message: error,
                showCloseButton: false,
                duration: 3000
            }).then((/**
             * @param {?} t
             * @return {?}
             */
            function (t) { return t.present(); }));
        };
        return AuthUserInteractionsService;
    }(auth.AuthUserInteractionsService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function (_super) {
        __extends(LoginComponent, _super);
        function LoginComponent(fb, store, cdr) {
            return _super.call(this, fb, store, cdr) || this;
        }
        LoginComponent.decorators = [
            { type: core.Component, args: [{selector: 'gngt-login',
                        template: "<ion-card><ion-card-header><ion-card-title translate>Login</ion-card-title></ion-card-header><ion-card-content><ion-list [formGroup]=\"loginForm\" [gngtFormDisabled]=\"disabled\" class=\"login-form\" (keyup.enter)=\"login()\"><ion-item><ion-label translate>Username</ion-label><ion-input [gngtInputAriaLabel]=\"'Username' | translate\" autocomplete=\"username\" formControlName=\"username\"></ion-input></ion-item><ion-item><ion-label translate>Password</ion-label><ion-input [gngtInputAriaLabel]=\"'Password' | translate\" type=\"password\" autocomplete=\"current-password\" formControlName=\"password\"></ion-input></ion-item></ion-list><div class=\"ion-actions\"><ion-button translate [disabled]=\"(valid|async) === false\" (click)=\"login()\">Login</ion-button></div></ion-card-content></ion-card>",
                        styles: ["gngt-login{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center}gngt-login .ion-actions{padding-top:1em;text-align:right}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        inputs: ['disabled']
                    },] },
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: store.Store },
            { type: core.ChangeDetectorRef }
        ]; };
        return LoginComponent;
    }(auth.LoginComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthModule = /** @class */ (function () {
        function AuthModule() {
        }
        /**
         * @param {?} options
         * @return {?}
         */
        AuthModule.forRoot = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            return {
                ngModule: AuthModule,
                providers: [
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: auth.JwtInterceptor,
                        multi: true
                    },
                    options.jwtOptionsProvider ||
                        {
                            provide: auth.JWT_OPTIONS,
                            useValue: options.jwtConfig
                        },
                    options.authOptionsProvider ||
                        {
                            provide: auth.AUTH_OPTIONS,
                            useValue: options.authConfig
                        },
                    auth.JwtHelperService
                ]
            };
        };
        AuthModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            angular.IonicModule,
                            core$1.TranslateModule,
                            common$1.CommonModule,
                            common$2.CommonModule,
                            auth.AuthModule
                        ],
                        declarations: [
                            LoginComponent,
                        ],
                        exports: [
                            LoginComponent
                        ],
                        providers: [
                            {
                                provide: auth.AuthUserInteractionsService,
                                useClass: AuthUserInteractionsService,
                                deps: [core$1.TranslateService, angular.AlertController, angular.ToastController]
                            }
                        ]
                    },] },
        ];
        return AuthModule;
    }());

    exports.AuthModule = AuthModule;
    exports.LoginComponent = LoginComponent;
    exports.ɵa = AuthUserInteractionsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ionic-auth.umd.js.map
