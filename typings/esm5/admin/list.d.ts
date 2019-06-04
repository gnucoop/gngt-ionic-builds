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
import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { AdminListComponent as BaseAdminListComponent } from '@gngt/core/admin';
import { Model, ModelActions, ModelListParams, ModelService, reducers as fromModel } from '@gngt/core/model';
import { AdminUserInteractionsService } from './admin-user-interactions';
export declare class AdminListComponent<T extends Model, S extends fromModel.State<T>, A extends ModelActions.ModelActionTypes, MS extends ModelService<T, S, A>> extends BaseAdminListComponent<T, S, A, MS> implements OnDestroy, OnInit {
    baseListParams: ModelListParams;
    infiniteScroll: IonInfiniteScroll;
    private _items;
    readonly items: T[];
    private _hasMore;
    readonly hasMore: boolean;
    private _listSub;
    private _listParams;
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
