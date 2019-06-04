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
import { Injectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input, ViewChild, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertController, IonInfiniteScroll, IonicModule } from '@ionic/angular';
import { GicModule } from '@gic/angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule as CommonModule$1 } from '@gngt/core/common';
import { __extends, __assign } from 'tslib';
import { from, Subscription } from 'rxjs';
import { switchMap, mapTo, map, filter } from 'rxjs/operators';
import { AdminUserInteractionsService as AdminUserInteractionsService$1, AdminEditComponent as AdminEditComponent$1, AdminListComponent as AdminListComponent$1 } from '@gngt/core/admin';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AdminUserInteractionsService = /** @class */ (function (_super) {
    __extends(AdminUserInteractionsService, _super);
    function AdminUserInteractionsService(alert, ts) {
        var _this = _super.call(this) || this;
        _this.alert = alert;
        _this.ts = ts;
        return _this;
    }
    /**
     * @return {?}
     */
    AdminUserInteractionsService.prototype.askDeleteConfirm = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var strings = [
            'Are you sure you want to delete?',
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
    AdminUserInteractionsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AdminUserInteractionsService.ctorParameters = function () { return [
        { type: AlertController },
        { type: TranslateService }
    ]; };
    return AdminUserInteractionsService;
}(AdminUserInteractionsService$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, S, A
 */
var AdminEditComponent = /** @class */ (function (_super) {
    __extends(AdminEditComponent, _super);
    function AdminEditComponent(cdr, fb, router) {
        return _super.call(this, cdr, fb, router) || this;
    }
    AdminEditComponent.decorators = [
        { type: Component, args: [{selector: 'gngt-admin-edit',
                    template: "<ion-card *ngIf=\"form|async as editForm\"><ion-card-header><ion-card-title>{{ title }} <span *ngIf=\"editForm.value['id']\">#{{ editForm.value['id'] }}</span></ion-card-title></ion-card-header><ion-card-content><ion-list [formGroup]=\"editForm\" [gngtFormDisabled]=\"loading|async\"><ng-container *ngFor=\"let field of fields\"><ng-container *ngIf=\"!field.hidden\"><ng-container [ngSwitch]=\"field.type\"><ion-item *ngSwitchCase=\"'input'\"><ion-label>{{ field.label | translate }}</ion-label><ion-input [formControlName]=\"field.name\" [type]=\"field.subtype || 'text'\" [readonly]=\"field.readonly\"></ion-input></ion-item><ion-item *ngSwitchCase=\"'textarea'\"><ion-label>{{ field.label | translate }}</ion-label><ion-textarea [formControlName]=\"field.name\"></ion-textarea></ion-item><ion-item *ngSwitchCase=\"'checkbox'\"><ion-label>{{ field.label | translate }}</ion-label><ion-checkbox slot=\"start\" [formControlName]=\"field.name\"></ion-checkbox></ion-item><ion-item *ngSwitchCase=\"'radio'\"><ion-label class=\"gngt-radio-label\">{{ field.label | translate }}</ion-label><div class=\"gngt-radio-container\"><ion-radio-group [formControlName]=\"field.name\"><div *ngFor=\"let choice of field.choices|async\"><ion-radio [value]=\"choice.value\"></ion-radio><ion-label>{{ choice.label }}</ion-label></div></ion-radio-group></div></ion-item><ion-item *ngSwitchCase=\"'select'\"><ion-label>{{ field.label | translate }}</ion-label><ion-select [formControlName]=\"field.name\"><ion-select-option *ngFor=\"let choice of field.choices|async\" [value]=\"choice.value\">{{ choice.label }}</ion-select-option></ion-select></ion-item><ion-item *ngSwitchCase=\"'multipleselect'\"><ion-label>{{ field.label | translate }}</ion-label><ion-select [formControlName]=\"field.name\" multiple=\"multiple\"><ion-select-option *ngFor=\"let choice of field.choices|async\" [value]=\"choice.value\">{{ choice.label }}</ion-select-option></ion-select></ion-item><ion-item *ngSwitchCase=\"'autocomplete'\"><ion-label>{{ field.label | translate }}</ion-label><gic-autocomplete [formControlName]=\"field.name\"><gic-autocomplete-option *ngFor=\"let choice of field.choices|async\">{{ choice.label }}</gic-autocomplete-option></gic-autocomplete></ion-item></ng-container></ng-container></ng-container></ion-list><div class=\"ion-actions\"><ion-spinner *ngIf=\"loading|async\"></ion-spinner><ion-button (click)=\"save()\" [disabled]=\"!editForm.valid\">{{ saveLabel | translate }}</ion-button><ion-button (click)=\"goBack()\" color=\"warning\">{{ cancelLabel | translate }}</ion-button></div></ion-card-content></ion-card>",
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
    AdminEditComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FormBuilder },
        { type: Router }
    ]; };
    return AdminEditComponent;
}(AdminEditComponent$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, S, A, MS
 */
var AdminListComponent = /** @class */ (function (_super) {
    __extends(AdminListComponent, _super);
    function AdminListComponent(cdr, aui) {
        var _this = _super.call(this, cdr, aui) || this;
        _this._items = [];
        _this._hasMore = true;
        _this._listSub = Subscription.EMPTY;
        _this._listParams = { start: 0, limit: 20, sort: {} };
        return _this;
    }
    Object.defineProperty(AdminListComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () { return this._items; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminListComponent.prototype, "hasMore", {
        get: /**
         * @return {?}
         */
        function () { return this._hasMore; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AdminListComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this._listSub.unsubscribe();
    };
    /**
     * @return {?}
     */
    AdminListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var service = this._getService();
        if (service == null) {
            return;
        }
        if (this.baseListParams) {
            if (this.baseListParams.start != null) {
                this._listParams.start = this.baseListParams.start;
            }
            if (this.baseListParams.limit != null) {
                this._listParams.limit = this.baseListParams.limit;
            }
        }
        this._listSub = service.getListObjects().pipe(filter((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r != null; }))).subscribe((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            if (_this.infiniteScroll) {
                ((/** @type {?} */ (_this.infiniteScroll))).complete();
            }
            _this._items = _this._items.concat(((/** @type {?} */ (r)).results || []));
            _this._hasMore = (/** @type {?} */ (r)).next != null;
            _this._cdr.markForCheck();
        }));
        this._loadList();
    };
    /**
     * @return {?}
     */
    AdminListComponent.prototype.getSelection = /**
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @return {?}
     */
    AdminListComponent.prototype.getItems = /**
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @return {?}
     */
    AdminListComponent.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AdminListComponent.prototype.selectAll = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AdminListComponent.prototype.refreshList = /**
     * @return {?}
     */
    function () {
        this._listParams.start = 0;
        this._loadList();
    };
    /**
     * @return {?}
     */
    AdminListComponent.prototype.loadMore = /**
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this._listParams.start)) += (/** @type {?} */ (this._listParams.limit));
        this._loadList();
    };
    /**
     * @private
     * @return {?}
     */
    AdminListComponent.prototype._loadList = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var service = this._getService();
        if (service == null || !this._hasMore) {
            return;
        }
        /** @type {?} */
        var listParams = __assign({}, (this.baseListParams || {}), this._listParams);
        service.list(listParams);
    };
    AdminListComponent.decorators = [
        { type: Component, args: [{selector: 'gngt-admin-list',
                    template: "<div><ion-card><ion-card-content><ion-content><ion-virtual-scroll [items]=\"items\"><ion-item *virtualItem=\"let item\">{{ item|json }}</ion-item></ion-virtual-scroll><ion-infinite-scroll *ngIf=\"hasMore\" threshold=\"100px\" (ionInfinite)=\"loadMore()\"><ion-infinite-scroll-content loadingSpinner=\"bubbles\"></ion-infinite-scroll-content></ion-infinite-scroll></ion-content></ion-card-content></ion-card></div>",
                    styles: ["gngt-admin-list{display:block;position:relative}gngt-admin-list>div{height:100%}gngt-admin-list>div>ion-card{height:calc(100% - 20px)}gngt-admin-list>div>ion-card>ion-card-content{height:100%}"],
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
    AdminListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: AdminUserInteractionsService }
    ]; };
    AdminListComponent.propDecorators = {
        baseListParams: [{ type: Input }],
        infiniteScroll: [{ type: ViewChild, args: [IonInfiniteScroll,] }]
    };
    return AdminListComponent;
}(AdminListComponent$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        GicModule,
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
    return AdminModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AdminEditComponent, AdminListComponent, AdminModule, AdminUserInteractionsService };
//# sourceMappingURL=admin.es5.js.map
