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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { AdminListComponent as BaseAdminListComponent } from '@gngt/core/admin';
import { mergeQueryParams } from '@gngt/core/common';
import { IonInfiniteScroll } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AdminUserInteractionsService } from './admin-user-interactions';
export class AdminListComponent extends BaseAdminListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9hZG1pbi9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFHTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsSUFBSSxzQkFBc0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzlFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBMEIsTUFBTSxtQkFBbUIsQ0FBQztBQUU1RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQVN2RSxNQUFNLE9BQU8sa0JBRzBFLFNBQ25GLHNCQUFtQztJQWlCckMsWUFBWSxHQUFzQixFQUFFLEdBQWlDO1FBQ25FLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFkVixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBS2pCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFLekIsY0FBUyxHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzdDLGlCQUFZLEdBQThCLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUlsRixDQUFDO0lBZEQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFHRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQVNRLFdBQVc7UUFDbEIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkMsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTthQUNuQixJQUFJLENBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUNyQjthQUNKLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGNBQXNCLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekM7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxjQUFjLEtBQVUsQ0FBQztJQUV6QixTQUFTLEtBQVUsQ0FBQztJQUVwQixXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBTSxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sU0FBUztRQUNmLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JDLE9BQU87U0FDUjtRQUNELE1BQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwRixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQXpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsKzVGQUF3QjtnQkFFeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O1lBdkJDLGlCQUFpQjtZQWVYLDRCQUE0Qjs7OzhCQWNqQyxLQUFLOzZCQUNMLFNBQVMsU0FBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkuXG4gKlxuICogR251Y29vcCBBbmd1bGFyIFRvb2xraXQgKGduZ3QpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEdudWNvb3AgQW5ndWxhciBUb29sa2l0IChnbmd0KS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FkbWluTGlzdENvbXBvbmVudCBhcyBCYXNlQWRtaW5MaXN0Q29tcG9uZW50fSBmcm9tICdAZ25ndC9jb3JlL2FkbWluJztcbmltcG9ydCB7bWVyZ2VRdWVyeVBhcmFtcywgTW9kZWwsIE1vZGVsUXVlcnlQYXJhbXN9IGZyb20gJ0Bnbmd0L2NvcmUvY29tbW9uJztcbmltcG9ydCB7TW9kZWxBY3Rpb25UeXBlcywgTW9kZWxTZXJ2aWNlLCBTdGF0ZSBhcyBNb2RlbFN0YXRlfSBmcm9tICdAZ25ndC9jb3JlL21vZGVsJztcbmltcG9ydCB7SW9uSW5maW5pdGVTY3JvbGx9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7QWRtaW5Vc2VySW50ZXJhY3Rpb25zU2VydmljZX0gZnJvbSAnLi9hZG1pbi11c2VyLWludGVyYWN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2duZ3QtYWRtaW4tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3QuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkxpc3RDb21wb25lbnQ8VCBleHRlbmRzIE1vZGVsID0gTW9kZWwsIFMgZXh0ZW5kcyBNb2RlbFN0YXRlPFQ+ID0gTW9kZWxTdGF0ZTxUPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIGV4dGVuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGVsQWN0aW9uVHlwZXMgPSBNb2RlbEFjdGlvblR5cGVzLCBNUyBleHRlbmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kZWxTZXJ2aWNlPFQsIFMsIEE+ID0gTW9kZWxTZXJ2aWNlPFQsIFMsIEE+PiBleHRlbmRzXG4gICAgQmFzZUFkbWluTGlzdENvbXBvbmVudDxULCBTLCBBLCBNUz4gaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGJhc2VRdWVyeVBhcmFtczogUGFydGlhbDxNb2RlbFF1ZXJ5UGFyYW1zPjtcbiAgQFZpZXdDaGlsZChJb25JbmZpbml0ZVNjcm9sbCkgaW5maW5pdGVTY3JvbGw6IElvbkluZmluaXRlU2Nyb2xsO1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBUW10gPSBbXTtcbiAgZ2V0IGl0ZW1zKCk6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFzTW9yZTogYm9vbGVhbiA9IHRydWU7XG4gIGdldCBoYXNNb3JlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNNb3JlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcXVlcnlTdWI6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfcXVlcnlQYXJhbXM6IFBhcnRpYWw8TW9kZWxRdWVyeVBhcmFtcz4gPSB7c3RhcnQ6IDAsIGxpbWl0OiAyMCwgc29ydDoge319O1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGF1aTogQWRtaW5Vc2VySW50ZXJhY3Rpb25zU2VydmljZSkge1xuICAgIHN1cGVyKGNkciwgYXVpKTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5fcXVlcnlTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLl9nZXRTZXJ2aWNlKCk7XG5cbiAgICBpZiAoc2VydmljZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcXVlcnlTdWIgPSBzZXJ2aWNlLmdldExpc3RPYmplY3RzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyKHIgPT4gciAhPSBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUociA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbmZpbml0ZVNjcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pbmZpbml0ZVNjcm9sbCBhcyBhbnkpLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtcyA9IFsuLi50aGlzLl9pdGVtcywgLi4uKHIhLnJlc3VsdHMgfHwgW10pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc01vcmUgPSByIS5uZXh0ICE9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLl9sb2FkTGlzdCgpO1xuICB9XG5cbiAgZ2V0U2VsZWN0aW9uKCk6IFRbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0SXRlbXMoKTogVFtdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHt9XG5cbiAgc2VsZWN0QWxsKCk6IHZvaWQge31cblxuICByZWZyZXNoTGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9xdWVyeVBhcmFtcy5zdGFydCA9IDA7XG4gICAgdGhpcy5fbG9hZExpc3QoKTtcbiAgfVxuXG4gIGxvYWRNb3JlKCk6IHZvaWQge1xuICAgIHRoaXMuX3F1ZXJ5UGFyYW1zLnN0YXJ0ISArPSB0aGlzLl9xdWVyeVBhcmFtcy5saW1pdCE7XG4gICAgdGhpcy5fbG9hZExpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xvYWRMaXN0KCk6IHZvaWQge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLl9nZXRTZXJ2aWNlKCk7XG4gICAgaWYgKHNlcnZpY2UgPT0gbnVsbCB8fCAhdGhpcy5faGFzTW9yZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG1lcmdlUXVlcnlQYXJhbXModGhpcy5fcXVlcnlQYXJhbXMsIHRoaXMuYmFzZVF1ZXJ5UGFyYW1zIHx8IHt9KTtcbiAgICBzZXJ2aWNlLnF1ZXJ5KHF1ZXJ5UGFyYW1zKTtcbiAgfVxufVxuIl19