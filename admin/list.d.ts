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
import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { AdminListComponent as BaseAdminListComponent } from '@gngt/core/admin';
import { Model, ModelQueryParams } from '@gngt/core/common';
import { ModelActionTypes, ModelService, State as ModelState } from '@gngt/core/model';
import { IonInfiniteScroll } from '@ionic/angular';
import { AdminUserInteractionsService } from './admin-user-interactions';
export declare class AdminListComponent<T extends Model = Model, S extends ModelState<T> = ModelState<T>, A extends ModelActionTypes = ModelActionTypes, MS extends ModelService<T, S, A> = ModelService<T, S, A>> extends BaseAdminListComponent<T, S, A, MS> implements OnDestroy, OnInit {
    baseQueryParams: Partial<ModelQueryParams>;
    infiniteScroll: IonInfiniteScroll;
    private _items;
    get items(): T[];
    private _hasMore;
    get hasMore(): boolean;
    private _querySub;
    private _queryParams;
    constructor(cdr: ChangeDetectorRef, aui: AdminUserInteractionsService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    getSelection(): T[];
    getItems(): T[];
    clearSelection(): void;
    selectAll(): void;
    refreshList(): void;
    loadMore(): void;
    private _loadList;
}
