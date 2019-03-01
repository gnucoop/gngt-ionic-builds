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
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule as CommonModule$1 } from '@gngt/core/common';
import { AuthUserInteractionsService as AuthUserInteractionsService$1, LoginComponent as LoginComponent$1, JwtInterceptor, JWT_OPTIONS, AUTH_OPTIONS, JwtHelperService, AuthModule as AuthModule$1 } from '@gngt/core/auth';
import { CommonModule as CommonModule$2 } from '@gngt/ionic/common';
import { __extends } from 'tslib';
import { from } from 'rxjs';
import { switchMap, mapTo, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthUserInteractionsService = /** @class */ (function (_super) {
    __extends(AuthUserInteractionsService, _super);
    function AuthUserInteractionsService(ts, alert, toast) {
        var _this = _super.call(this) || this;
        _this.ts = ts;
        _this.alert = alert;
        _this.toast = toast;
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
        return this.ts.get(strings).pipe(switchMap((/**
         * @param {?} ts
         * @return {?}
         */
        function (ts) { return from(_this.alert.create({
            message: ts[0],
            buttons: [{ text: ts[1], role: 'cancel' }, { text: ts[2], role: 'confirm' }]
        })); })), switchMap((/**
         * @param {?} alert
         * @return {?}
         */
        function (alert) { return from(alert.present()).pipe(mapTo(alert)); })), switchMap((/**
         * @param {?} alert
         * @return {?}
         */
        function (alert) { return from(alert.onDidDismiss()); })), map((/**
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
        this.toast.create({
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
}(AuthUserInteractionsService$1));

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
        { type: Component, args: [{selector: 'gngt-login',
                    template: "<ion-card><ion-card-header><ion-card-title translate>Login</ion-card-title></ion-card-header><ion-card-content><ion-list [formGroup]=\"loginForm\" [gngtFormDisabled]=\"disabled\" class=\"login-form\" (keyup.enter)=\"login()\"><ion-item><ion-label translate>Username</ion-label><ion-input [gngtInputAriaLabel]=\"'Username' | translate\" autocomplete=\"username\" formControlName=\"username\"></ion-input></ion-item><ion-item><ion-label translate>Password</ion-label><ion-input [gngtInputAriaLabel]=\"'Password' | translate\" type=\"password\" autocomplete=\"current-password\" formControlName=\"password\"></ion-input></ion-item></ion-list><div class=\"ion-actions\"><ion-button translate [disabled]=\"(valid|async) === false\" (click)=\"login()\">Login</ion-button></div></ion-card-content></ion-card>",
                    styles: ["gngt-login{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center}gngt-login .ion-actions{padding-top:1em;text-align:right}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    inputs: ['disabled']
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Store },
        { type: ChangeDetectorRef }
    ]; };
    return LoginComponent;
}(LoginComponent$1));

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
                    provide: HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true
                },
                options.jwtOptionsProvider ||
                    {
                        provide: JWT_OPTIONS,
                        useValue: options.jwtConfig
                    },
                options.authOptionsProvider ||
                    {
                        provide: AUTH_OPTIONS,
                        useValue: options.authConfig
                    },
                JwtHelperService
            ]
        };
    };
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        TranslateModule,
                        CommonModule$1,
                        CommonModule$2,
                        AuthModule$1
                    ],
                    declarations: [
                        LoginComponent,
                    ],
                    exports: [
                        LoginComponent
                    ],
                    providers: [
                        {
                            provide: AuthUserInteractionsService$1,
                            useClass: AuthUserInteractionsService,
                            deps: [TranslateService, AlertController, ToastController]
                        }
                    ]
                },] },
    ];
    return AuthModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthModule, LoginComponent, AuthUserInteractionsService as ɵa };
//# sourceMappingURL=auth.es5.js.map
