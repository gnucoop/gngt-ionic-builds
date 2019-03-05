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
import { Injectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule as CommonModule$1 } from '@gngt/core/common';
import { from } from 'rxjs';
import { switchMap, mapTo, map } from 'rxjs/operators';
import { AdminUserInteractionsService as AdminUserInteractionsService$1, AdminEditComponent as AdminEditComponent$1, AdminListComponent as AdminListComponent$1 } from '@gngt/core/admin';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdminUserInteractionsService extends AdminUserInteractionsService$1 {
    /**
     * @param {?} alert
     * @param {?} ts
     */
    constructor(alert, ts) {
        super();
        this.alert = alert;
        this.ts = ts;
    }
    /**
     * @return {?}
     */
    askDeleteConfirm() {
        /** @type {?} */
        const strings = [
            'Are you sure you want to delete?',
            'Cancel',
            'Ok'
        ];
        return this.ts.get(strings).pipe(switchMap((/**
         * @param {?} ts
         * @return {?}
         */
        ts => from(this.alert.create({
            message: ts[0],
            buttons: [{ text: ts[1], role: 'cancel' }, { text: ts[2], role: 'confirm' }]
        })))), switchMap((/**
         * @param {?} alert
         * @return {?}
         */
        alert => from(alert.present()).pipe(mapTo(alert)))), switchMap((/**
         * @param {?} alert
         * @return {?}
         */
        alert => from(alert.onDidDismiss()))), map((/**
         * @param {?} evt
         * @return {?}
         */
        (evt) => evt.role === 'confirm')));
    }
}
AdminUserInteractionsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AdminUserInteractionsService.ctorParameters = () => [
    { type: AlertController },
    { type: TranslateService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, S, A1, A2, A3, A4, A5, A6, A7
 */
class AdminEditComponent extends AdminEditComponent$1 {
    /**
     * @param {?} cdr
     * @param {?} fb
     * @param {?} router
     */
    constructor(cdr, fb, router) {
        super(cdr, fb, router);
    }
}
AdminEditComponent.decorators = [
    { type: Component, args: [{selector: 'gngt-admin-edit',
                template: "<ion-card *ngIf=\"form|async as editForm\"><ion-card-header><ion-card-title>{{ title }} <span *ngIf=\"editForm.value['id']\">#{{ editForm.value['id'] }}</span></ion-card-title></ion-card-header><ion-card-content><ion-list [formGroup]=\"editForm\" [gngtFormDisabled]=\"loading|async\"><ng-container *ngFor=\"let field of fields\"><ng-container *ngIf=\"!field.hidden\"><ng-container [ngSwitch]=\"field.type\"><ion-item *ngSwitchCase=\"'input'\"><ion-label>{{ field.label | translate }}</ion-label><ion-input [formControlName]=\"field.name\" [type]=\"field.subtype || 'text'\" [readonly]=\"field.readonly\"></ion-input></ion-item><ion-item *ngSwitchCase=\"'textarea'\"><ion-label>{{ field.label | translate }}</ion-label><ion-textarea [formControlName]=\"field.name\"></ion-textarea></ion-item><ion-item *ngSwitchCase=\"'checkbox'\"><ion-label>{{ field.label | translate }}</ion-label><ion-checkbox slot=\"start\" [formControlName]=\"field.name\"></ion-checkbox></ion-item><ion-item *ngSwitchCase=\"'radio'\"><ion-label class=\"gngt-radio-label\">{{ field.label | translate }}</ion-label><div class=\"gngt-radio-container\"><ion-radio-group [formControlName]=\"field.name\"><div *ngFor=\"let choice of field.choices|async\"><ion-radio [value]=\"choice.value\"></ion-radio><ion-label>{{ choice.label }}</ion-label></div></ion-radio-group></div></ion-item><ion-item *ngSwitchCase=\"'select'\"><ion-label>{{ field.label | translate }}</ion-label><ion-select [formControlName]=\"field.name\"><ion-select-option *ngFor=\"let choice of field.choices|async\" [value]=\"choice.value\">{{ choice.label }}</ion-select-option></ion-select></ion-item><ion-item *ngSwitchCase=\"'multipleselect'\"><ion-label>{{ field.label | translate }}</ion-label><ion-select [formControlName]=\"field.name\" multiple=\"multiple\"><ion-select-option *ngFor=\"let choice of field.choices|async\" [value]=\"choice.value\">{{ choice.label }}</ion-select-option></ion-select></ion-item></ng-container></ng-container></ng-container></ion-list><div class=\"ion-actions\"><ion-spinner *ngIf=\"loading|async\"></ion-spinner><ion-button (click)=\"save()\" [disabled]=\"!editForm.valid\">{{ saveLabel | translate }}</ion-button><ion-button (click)=\"goBack()\" color=\"warning\">{{ cancelLabel | translate }}</ion-button></div></ion-card-content></ion-card>",
                styles: ["gngt-admin-edit{display:block}gngt-admin-edit>ion-card>ion-card-header{margin:-24px -24px 48px;padding:24px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-label{flex:0 1 auto;max-width:200px}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container{display:inline-block;flex:1 1 auto}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group{display:inline-block}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group>div{display:inline-flex!important;align-items:center;position:relative;padding-left:8px;margin-right:.5em}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group>div>ion-label,gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group>div>ion-radio{display:inline-block!important;margin-right:.5em}gngt-admin-edit>ion-card>ion-card-content>.ion-actions{text-align:right}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                inputs: [
                    'title',
                    'listUrl',
                    'cancelLabel',
                    'saveLabel',
                    'service',
                    'fields',
                    'processFormData',
                    'processObject',
                    'id',
                ],
                outputs: [
                    'valueChanges$',
                ]
            },] },
];
/** @nocollapse */
AdminEditComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: FormBuilder },
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, S, A1, A2, A3, A4, A5, A6, A7, MS
 */
class AdminListComponent extends AdminListComponent$1 {
    /**
     * @param {?} cdr
     * @param {?} aui
     */
    constructor(cdr, aui) {
        super(cdr, aui);
    }
    /**
     * @return {?}
     */
    getSelection() {
        return [];
    }
    /**
     * @return {?}
     */
    getItems() {
        return [];
    }
    /**
     * @return {?}
     */
    clearSelection() {
    }
    /**
     * @return {?}
     */
    selectAll() {
    }
    /**
     * @return {?}
     */
    refreshList() {
    }
}
AdminListComponent.decorators = [
    { type: Component, args: [{selector: 'gngt-admin-list',
                template: "",
                styles: ["gngt-admin-list{display:block}gngt-admin-list>.mat-card>[mat-card-header]{margin:-24px -24px 48px;padding:24px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}gngt-admin-list>.mat-card>[mat-card-header]+[mat-mini-fab]{position:absolute;right:24px;margin-top:-70px}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar{margin:1em 0}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-spacer{flex:0 0 .5em}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-filler{flex:1 1 auto}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .mat-paginator{background:0 0}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-actions{display:flex;align-items:center}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-actions>*{flex-shrink:0}gngt-admin-list>.mat-card>.mat-card-content table{width:100%}gngt-admin-list>.mat-card>.mat-card-content table td:not(.gngt-select){cursor:pointer}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                inputs: [
                    'title',
                    'headers',
                    'displayedColumns',
                    'baseEditUrl',
                    'newItemPath',
                    'service'
                ]
            },] },
];
/** @nocollapse */
AdminListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AdminUserInteractionsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdminModule {
}
AdminModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    IonicModule,
                    RouterModule,
                    TranslateModule,
                    CommonModule$1
                ],
                declarations: [
                    AdminEditComponent,
                    AdminListComponent
                ],
                exports: [
                    AdminEditComponent,
                    AdminListComponent
                ],
                providers: [
                    AdminUserInteractionsService,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AdminModule, AdminUserInteractionsService, AdminEditComponent, AdminListComponent };
//# sourceMappingURL=admin.js.map
