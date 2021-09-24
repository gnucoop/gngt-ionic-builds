import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthUserInteractionsService as AuthUserInteractionsService$1, LoginComponent as LoginComponent$1, JwtHelperService, AUTH_OPTIONS, JWT_OPTIONS, JwtInterceptor, AuthModule as AuthModule$1 } from '@gngt/core/auth';
import { CommonModule as CommonModule$1 } from '@gngt/core/common';
import { CommonModule as CommonModule$2 } from '@gngt/ionic/common';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';
import { switchMap, mapTo, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

/**
 * @license
 * Copyright (C) Gnucoop soc. coop.
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
class AuthUserInteractionsService extends AuthUserInteractionsService$1 {
    constructor(_ts, _alert, _toast) {
        super();
        this._ts = _ts;
        this._alert = _alert;
        this._toast = _toast;
    }
    askLogoutConfirm() {
        const strings = ['Are you sure you want to logout?', 'Cancel', 'Ok'];
        return this._ts.get(strings).pipe(switchMap(ts => from(this._alert.create({
            message: ts[0],
            buttons: [{ text: ts[1], role: 'cancel' }, { text: ts[2], role: 'confirm' }]
        }))), switchMap(alert => from(alert.present()).pipe(mapTo(alert))), switchMap(alert => from(alert.onDidDismiss())), map(evt => evt.role === 'confirm'));
    }
    showLoginError(error) {
        this._toast.create({ message: error, duration: 3000 }).then(t => t.present());
    }
}

/**
 * @license
 * Copyright (C) Gnucoop soc. coop.
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
class LoginComponent extends LoginComponent$1 {
    constructor(fb, store, cdr) {
        super(fb, store, cdr);
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'gngt-login',
                template: "<ion-list\n    [formGroup]=\"loginForm\"\n    [gngtFormDisabled]=\"disabled\"\n    class=\"login-form\"\n    (keyup.enter)=\"login()\"\n>\n  <ion-item>\n    <ion-label *ngIf=\"showLabels\">\n      <ng-content select=\"[gngtLoginUsername]\"></ng-content>\n    </ion-label>\n    <ion-input\n        [gngtInputAriaLabel]=\"usernamePlaceholder\"\n        [placeholder]=\"usernamePlaceholder\"\n        autocomplete=\"on\"\n        formControlName=\"username\"\n    ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label *ngIf=\"showLabels\">\n      <ng-content select=\"[gngtLoginPassword]\"></ng-content>\n    </ion-label>\n    <ion-input\n        [gngtInputAriaLabel]=\"passwordPlaceholder\"\n        [placeholder]=\"passwordPlaceholder\"\n        type=\"password\"\n        autocomplete=\"on\"\n        formControlName=\"password\"\n    ></ion-input>\n  </ion-item>\n  <ng-content></ng-content>\n</ion-list>\n<div class=\"ion-actions\">\n  <ion-button\n      [disabled]=\"(valid|async) === false\"\n      (click)=\"login()\"\n  >\n    <ng-content select=\"[gngtLoginAction]\"></ng-content>\n  </ion-button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["gngt-login{display:flex;align-items:center;justify-content:center;flex-direction:column}gngt-login .ion-actions{padding-top:1em;text-align:right}\n"]
            },] }
];
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Store },
    { type: ChangeDetectorRef }
];

/**
 * @license
 * Copyright (C) Gnucoop soc. coop.
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
class AuthModule {
    static forRoot(options) {
        return {
            ngModule: AuthModule,
            providers: [
                JwtHelperService,
                options.authOptionsProvider || { provide: AUTH_OPTIONS, useValue: options.authConfig },
                options.jwtOptionsProvider || { provide: JWT_OPTIONS, useValue: options.jwtConfig },
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            ]
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    AuthModule$1,
                    CommonModule$1,
                    CommonModule$2,
                    IonicModule,
                    ReactiveFormsModule,
                ],
                declarations: [
                    LoginComponent,
                ],
                exports: [
                    AuthModule$1,
                    LoginComponent,
                ],
                providers: [{
                        provide: AuthUserInteractionsService$1,
                        useClass: AuthUserInteractionsService,
                        deps: [TranslateService, AlertController, ToastController]
                    }]
            },] }
];

/**
 * @license
 * Copyright (C) Gnucoop soc. coop.
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

/**
 * Generated bundle index. Do not edit.
 */

export { AuthModule, LoginComponent, AuthUserInteractionsService as ɵgc_gngt_src_ionic_auth_auth_a };
//# sourceMappingURL=auth.js.map
