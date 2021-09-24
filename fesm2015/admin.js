import { CommonModule } from '@angular/common';
import { Injectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Pipe, Input, ViewChild, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GicModule } from '@gic/angular';
import { AdminUserInteractionsService as AdminUserInteractionsService$1, AdminEditComponent as AdminEditComponent$1, AdminListComponent as AdminListComponent$1, GngtAdminModule } from '@gngt/core/admin';
import { mergeQueryParams, CommonModule as CommonModule$1 } from '@gngt/core/common';
import { AlertController, IonInfiniteScroll, IonicModule } from '@ionic/angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { from, Subscription } from 'rxjs';
import { switchMap, mapTo, map, filter } from 'rxjs/operators';

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
class AdminUserInteractionsService extends AdminUserInteractionsService$1 {
    constructor(_alert, _ts) {
        super();
        this._alert = _alert;
        this._ts = _ts;
    }
    askDeleteConfirm() {
        const strings = ['Are you sure you want to delete?', 'Cancel', 'Ok'];
        return this._ts.get(strings).pipe(switchMap(ts => from(this._alert.create({
            message: ts[0],
            buttons: [{ text: ts[1], role: 'cancel' }, { text: ts[2], role: 'confirm' }]
        }))), switchMap(alert => from(alert.present()).pipe(mapTo(alert))), switchMap(alert => from(alert.onDidDismiss())), map(evt => evt.role === 'confirm'));
    }
}
AdminUserInteractionsService.decorators = [
    { type: Injectable }
];
AdminUserInteractionsService.ctorParameters = () => [
    { type: AlertController },
    { type: TranslateService }
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
class AdminEditComponent extends AdminEditComponent$1 {
    constructor(cdr, fb, router) {
        super(cdr, fb, router);
    }
}
AdminEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'gngt-admin-edit',
                template: "<ion-card *ngIf=\"form|async as editForm\">\n  <ion-card-header>\n    <ion-card-title>\n      {{ title }}\n      <span *ngIf=\"editForm!.value.id\">#{{ editForm!.value.id }}</span>\n    </ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <div [formGroup]=\"editForm!\" [gngtFormDisabled]=\"(loading|async) === true\">\n      <ng-content select=\"[gngtAdminEditFormHeader]\"></ng-content>\n      <ion-list>\n        <ng-container *ngFor=\"let field of fields\">\n          <ng-container *ngIf=\"!field.hidden\">\n            <ng-container [ngSwitch]=\"field.type\">\n              <ion-item *ngSwitchCase=\"'input'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <ion-input [formControlName]=\"field.name\" [type]=\"field.subtype|gngtInputType\"\n                    [readonly]=\"field.readonly === true\"></ion-input>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'textarea'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <ion-textarea [formControlName]=\"field.name\"></ion-textarea>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'checkbox'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <ion-checkbox slot=\"start\" [formControlName]=\"field.name\"></ion-checkbox>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'radio'\">\n                <ion-label class=\"gngt-radio-label\">{{ field.label | translate }}</ion-label>\n                <div class=\"gngt-radio-container\">\n                  <ion-radio-group [formControlName]=\"field.name\">\n                    <div *ngFor=\"let choice of field.choices|gngtChoices\">\n                      <ion-radio [value]=\"choice.value\"></ion-radio>\n                      <ion-label>{{ choice.label }}</ion-label>\n                    </div>\n                  </ion-radio-group>\n                </div>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'select'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <ion-select [formControlName]=\"field.name\">\n                  <ion-select-option *ngFor=\"let choice of field.choices|gngtChoices\"\n                      [value]=\"choice.value\">{{ choice.label }}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'multipleselect'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <ion-select [formControlName]=\"field.name\" [multiple]=\"true\">\n                  <ion-select-option *ngFor=\"let choice of field.choices|gngtChoices\"\n                      [value]=\"choice.value\">{{ choice.label }}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'autocomplete'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <gic-autocomplete [formControlName]=\"field.name\">\n                  <gic-autocomplete-option\n                      *ngFor=\"let choice of field.choices|gngtChoices\">{{ choice.label }}</gic-autocomplete-option>\n                </gic-autocomplete>\n              </ion-item>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </ion-list>\n      <ng-content select=\"[gngtAdminEditFormFooter]\"></ng-content>\n    </div>\n    <div class=\"ion-actions\">\n      <ion-spinner *ngIf=\"loading|async\"></ion-spinner>\n      <ion-button (click)=\"save()\" [disabled]=\"(canSave === false) || !(editForm!.valid)\">{{ saveLabel | translate }}</ion-button>\n      <ion-button (click)=\"goBack()\" color=\"warning\">{{ cancelLabel | translate }}</ion-button>\n    </div>\n  </ion-card-content>\n</ion-card>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["gngt-admin-edit{display:block}gngt-admin-edit>ion-card>ion-card-header{margin:-24px -24px 48px;padding:24px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-label{flex:0 1 auto;max-width:200px}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container{display:inline-block;flex:1 1 auto}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group{display:inline-block}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group>div{display:inline-flex !important;align-items:center;position:relative;padding-left:8px;margin-right:.5em}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group>div>ion-label,gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group>div>ion-radio{display:inline-block !important;margin-right:.5em}gngt-admin-edit>ion-card>ion-card-content>.ion-actions{text-align:right}\n"]
            },] }
];
AdminEditComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: FormBuilder },
    { type: Router }
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
const validTypes = ['date', 'email', 'number', 'password', 'search', 'tel', 'text', 'url', 'time'];
class InputTypePipe {
    transform(value) {
        if (value != null && validTypes.indexOf(value) > -1) {
            return value;
        }
        return 'text';
    }
}
InputTypePipe.decorators = [
    { type: Pipe, args: [{ name: 'gngtInputType' },] }
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
class AdminListComponent extends AdminListComponent$1 {
    constructor(cdr, aui) {
        super(cdr, aui);
        this._items = [];
        this._hasMore = true;
        this._querySub = Subscription.EMPTY;
        this._queryParams = { start: 0, limit: 20, sort: {} };
    }
    get items() {
        return this._items;
    }
    get hasMore() {
        return this._hasMore;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._querySub.unsubscribe();
    }
    ngOnInit() {
        const service = this._getService();
        if (service == null) {
            return;
        }
        this._querySub = service.getListObjects()
            .pipe(filter(r => r != null))
            .subscribe(r => {
            if (this.infiniteScroll) {
                this.infiniteScroll.complete();
            }
            this._items = [...this._items, ...(r.results || [])];
            this._hasMore = r.next != null;
            this._cdr.markForCheck();
        });
        this._loadList();
    }
    getSelection() {
        return [];
    }
    getItems() {
        return [];
    }
    clearSelection() { }
    selectAll() { }
    refreshList() {
        this._queryParams.start = 0;
        this._loadList();
    }
    loadMore() {
        this._queryParams.start += this._queryParams.limit;
        this._loadList();
    }
    _loadList() {
        const service = this._getService();
        if (service == null || !this._hasMore) {
            return;
        }
        const queryParams = mergeQueryParams(this._queryParams, this.baseQueryParams || {});
        service.query(queryParams);
    }
}
AdminListComponent.decorators = [
    { type: Component, args: [{
                selector: 'gngt-admin-list',
                template: "<div>\n  <ion-card>\n    <ion-card-content>\n      <ion-content>\n        <ion-virtual-scroll [items]=\"items\">\n          <ion-item *virtualItem=\"let item\">\n            {{ item|json }}\n          </ion-item>\n        </ion-virtual-scroll>\n        <ion-infinite-scroll *ngIf=\"hasMore\" threshold=\"100px\" (ionInfinite)=\"loadMore()\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-content>\n    </ion-card-content>\n  </ion-card>\n</div>\n<!-- <mat-card>\n  <h2 mat-card-header>{{ title }}</h2>\n  <button [routerLink]=\"baseEditUrl + newItemPath\" mat-mini-fab color=\"primary\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <mat-card-content>\n    <mat-toolbar>\n      <div class=\"gngt-actions\">\n        <mat-select #actionSel [disabled]=\"!selection.hasValue()\" [placeholder]=\"'Action' | translate\">\n          <mat-option value=\"delete\">{{ 'Delete' | translate }}</mat-option>\n        </mat-select>\n        <span class=\"gngt-spacer\"></span>\n        <button mat-raised-button [disabled]=\"!actionSel.value\"\n            (click)=\"processAction(actionSel.value)\">{{ 'Apply' | translate }}</button>\n      </div>\n      <span class=\"gngt-filler\"></span>\n      <mat-paginator [pageSizeOptions]=\"[20, 50, 100]\" showFirstLastButtons></mat-paginator>\n    </mat-toolbar>\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td class=\"gngt-select\" mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n      <ng-container *ngFor=\"let header of headers\"\n          [matColumnDef]=\"header.column\">\n        <ng-container *ngIf=\"header.sortable; else notSortable\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ header.label | translate }}</th>\n        </ng-container>\n        <ng-template #notSortable>\n          <th mat-header-cell *matHeaderCellDef>{{ header.label | translate }}</th>\n        </ng-template>\n        <td [routerLink]=\"baseEditUrl + element.id\" mat-cell *matCellDef=\"let element\">{{ element[header.column] }}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-card-content>\n</mat-card> -->\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["gngt-admin-list{display:block;position:relative}gngt-admin-list>div{height:100%}gngt-admin-list>div>ion-card{height:calc(100% - 20px)}gngt-admin-list>div>ion-card>ion-card-content{height:100%}\n"]
            },] }
];
AdminListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AdminUserInteractionsService }
];
AdminListComponent.propDecorators = {
    baseQueryParams: [{ type: Input }],
    infiniteScroll: [{ type: ViewChild, args: [IonInfiniteScroll,] }]
};

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
class AdminModule {
}
AdminModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    GngtAdminModule,
                    GicModule,
                    CommonModule$1,
                    IonicModule,
                    ReactiveFormsModule,
                    RouterModule,
                    TranslateModule,
                ],
                declarations: [
                    AdminEditComponent,
                    AdminListComponent,
                    InputTypePipe,
                ],
                exports: [
                    AdminEditComponent,
                    AdminListComponent,
                ],
                providers: [
                    AdminUserInteractionsService,
                ]
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

export { AdminEditComponent, AdminListComponent, AdminModule, AdminUserInteractionsService, InputTypePipe as ɵgc_gngt_src_ionic_admin_admin_a };
//# sourceMappingURL=admin.js.map
