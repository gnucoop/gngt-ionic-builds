(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/router'), require('@gic/angular'), require('@gngt/core/admin'), require('@gngt/core/common'), require('@ionic/angular'), require('@ngx-translate/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@gngt/ionic/admin', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/router', '@gic/angular', '@gngt/core/admin', '@gngt/core/common', '@ionic/angular', '@ngx-translate/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.gngt = global.gngt || {}, global.gngt.ionic = global.gngt.ionic || {}, global.gngt.ionic.admin = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.router, global.gic.angular, global.ng.core.admin, global.ng.core.common, global.ionic.angular, global.ngx.translate.core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, common$1, core, forms, router, angular$1, admin, common, angular, core$1, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var AdminUserInteractionsService = /** @class */ (function (_super) {
        __extends(AdminUserInteractionsService, _super);
        function AdminUserInteractionsService(_alert, _ts) {
            var _this = _super.call(this) || this;
            _this._alert = _alert;
            _this._ts = _ts;
            return _this;
        }
        AdminUserInteractionsService.prototype.askDeleteConfirm = function () {
            var _this = this;
            var strings = ['Are you sure you want to delete?', 'Cancel', 'Ok'];
            return this._ts.get(strings).pipe(operators.switchMap(function (ts) { return rxjs.from(_this._alert.create({
                message: ts[0],
                buttons: [{ text: ts[1], role: 'cancel' }, { text: ts[2], role: 'confirm' }]
            })); }), operators.switchMap(function (alert) { return rxjs.from(alert.present()).pipe(operators.mapTo(alert)); }), operators.switchMap(function (alert) { return rxjs.from(alert.onDidDismiss()); }), operators.map(function (evt) { return evt.role === 'confirm'; }));
        };
        return AdminUserInteractionsService;
    }(admin.AdminUserInteractionsService));
    AdminUserInteractionsService.decorators = [
        { type: core.Injectable }
    ];
    AdminUserInteractionsService.ctorParameters = function () { return [
        { type: angular.AlertController },
        { type: core$1.TranslateService }
    ]; };

    var AdminEditComponent = /** @class */ (function (_super) {
        __extends(AdminEditComponent, _super);
        function AdminEditComponent(cdr, fb, router) {
            return _super.call(this, cdr, fb, router) || this;
        }
        return AdminEditComponent;
    }(admin.AdminEditComponent));
    AdminEditComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gngt-admin-edit',
                    template: "<ion-card *ngIf=\"form|async as editForm\">\n  <ion-card-header>\n    <ion-card-title>\n      {{ title }}\n      <span *ngIf=\"editForm!.value.id\">#{{ editForm!.value.id }}</span>\n    </ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <div [formGroup]=\"editForm!\" [gngtFormDisabled]=\"(loading|async) === true\">\n      <ng-content select=\"[gngtAdminEditFormHeader]\"></ng-content>\n      <ion-list>\n        <ng-container *ngFor=\"let field of fields\">\n          <ng-container *ngIf=\"!field.hidden\">\n            <ng-container [ngSwitch]=\"field.type\">\n              <ion-item *ngSwitchCase=\"'input'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <ion-input [formControlName]=\"field.name\" [type]=\"field.subtype|gngtInputType\"\n                    [readonly]=\"field.readonly === true\"></ion-input>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'textarea'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <ion-textarea [formControlName]=\"field.name\"></ion-textarea>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'checkbox'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <ion-checkbox slot=\"start\" [formControlName]=\"field.name\"></ion-checkbox>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'radio'\">\n                <ion-label class=\"gngt-radio-label\">{{ field.label | translate }}</ion-label>\n                <div class=\"gngt-radio-container\">\n                  <ion-radio-group [formControlName]=\"field.name\">\n                    <div *ngFor=\"let choice of field.choices|gngtChoices\">\n                      <ion-radio [value]=\"choice.value\"></ion-radio>\n                      <ion-label>{{ choice.label }}</ion-label>\n                    </div>\n                  </ion-radio-group>\n                </div>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'select'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <ion-select [formControlName]=\"field.name\">\n                  <ion-select-option *ngFor=\"let choice of field.choices|gngtChoices\"\n                      [value]=\"choice.value\">{{ choice.label }}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'multipleselect'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <ion-select [formControlName]=\"field.name\" [multiple]=\"true\">\n                  <ion-select-option *ngFor=\"let choice of field.choices|gngtChoices\"\n                      [value]=\"choice.value\">{{ choice.label }}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngSwitchCase=\"'autocomplete'\">\n                <ion-label>{{ field.label | translate }}</ion-label>\n                <gic-autocomplete [formControlName]=\"field.name\">\n                  <gic-autocomplete-option\n                      *ngFor=\"let choice of field.choices|gngtChoices\">{{ choice.label }}</gic-autocomplete-option>\n                </gic-autocomplete>\n              </ion-item>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </ion-list>\n      <ng-content select=\"[gngtAdminEditFormFooter]\"></ng-content>\n    </div>\n    <div class=\"ion-actions\">\n      <ion-spinner *ngIf=\"loading|async\"></ion-spinner>\n      <ion-button (click)=\"save()\" [disabled]=\"(canSave === false) || !(editForm!.valid)\">{{ saveLabel | translate }}</ion-button>\n      <ion-button (click)=\"goBack()\" color=\"warning\">{{ cancelLabel | translate }}</ion-button>\n    </div>\n  </ion-card-content>\n</ion-card>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: ["gngt-admin-edit{display:block}gngt-admin-edit>ion-card>ion-card-header{margin:-24px -24px 48px;padding:24px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-label{flex:0 1 auto;max-width:200px}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container{display:inline-block;flex:1 1 auto}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group{display:inline-block}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group>div{display:inline-flex !important;align-items:center;position:relative;padding-left:8px;margin-right:.5em}gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group>div>ion-label,gngt-admin-edit>ion-card>ion-card-content .gngt-radio-container ion-radio-group>div>ion-radio{display:inline-block !important;margin-right:.5em}gngt-admin-edit>ion-card>ion-card-content>.ion-actions{text-align:right}\n"]
                },] }
    ];
    AdminEditComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: forms.FormBuilder },
        { type: router.Router }
    ]; };

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
    var validTypes = ['date', 'email', 'number', 'password', 'search', 'tel', 'text', 'url', 'time'];
    var InputTypePipe = /** @class */ (function () {
        function InputTypePipe() {
        }
        InputTypePipe.prototype.transform = function (value) {
            if (value != null && validTypes.indexOf(value) > -1) {
                return value;
            }
            return 'text';
        };
        return InputTypePipe;
    }());
    InputTypePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'gngtInputType' },] }
    ];

    var AdminListComponent = /** @class */ (function (_super) {
        __extends(AdminListComponent, _super);
        function AdminListComponent(cdr, aui) {
            var _this = _super.call(this, cdr, aui) || this;
            _this._items = [];
            _this._hasMore = true;
            _this._querySub = rxjs.Subscription.EMPTY;
            _this._queryParams = { start: 0, limit: 20, sort: {} };
            return _this;
        }
        Object.defineProperty(AdminListComponent.prototype, "items", {
            get: function () {
                return this._items;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AdminListComponent.prototype, "hasMore", {
            get: function () {
                return this._hasMore;
            },
            enumerable: false,
            configurable: true
        });
        AdminListComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            this._querySub.unsubscribe();
        };
        AdminListComponent.prototype.ngOnInit = function () {
            var _this = this;
            var service = this._getService();
            if (service == null) {
                return;
            }
            this._querySub = service.getListObjects()
                .pipe(operators.filter(function (r) { return r != null; }))
                .subscribe(function (r) {
                if (_this.infiniteScroll) {
                    _this.infiniteScroll.complete();
                }
                _this._items = __spreadArray(__spreadArray([], __read(_this._items)), __read((r.results || [])));
                _this._hasMore = r.next != null;
                _this._cdr.markForCheck();
            });
            this._loadList();
        };
        AdminListComponent.prototype.getSelection = function () {
            return [];
        };
        AdminListComponent.prototype.getItems = function () {
            return [];
        };
        AdminListComponent.prototype.clearSelection = function () { };
        AdminListComponent.prototype.selectAll = function () { };
        AdminListComponent.prototype.refreshList = function () {
            this._queryParams.start = 0;
            this._loadList();
        };
        AdminListComponent.prototype.loadMore = function () {
            this._queryParams.start += this._queryParams.limit;
            this._loadList();
        };
        AdminListComponent.prototype._loadList = function () {
            var service = this._getService();
            if (service == null || !this._hasMore) {
                return;
            }
            var queryParams = common.mergeQueryParams(this._queryParams, this.baseQueryParams || {});
            service.query(queryParams);
        };
        return AdminListComponent;
    }(admin.AdminListComponent));
    AdminListComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gngt-admin-list',
                    template: "<div>\n  <ion-card>\n    <ion-card-content>\n      <ion-content>\n        <ion-virtual-scroll [items]=\"items\">\n          <ion-item *virtualItem=\"let item\">\n            {{ item|json }}\n          </ion-item>\n        </ion-virtual-scroll>\n        <ion-infinite-scroll *ngIf=\"hasMore\" threshold=\"100px\" (ionInfinite)=\"loadMore()\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-content>\n    </ion-card-content>\n  </ion-card>\n</div>\n<!-- <mat-card>\n  <h2 mat-card-header>{{ title }}</h2>\n  <button [routerLink]=\"baseEditUrl + newItemPath\" mat-mini-fab color=\"primary\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <mat-card-content>\n    <mat-toolbar>\n      <div class=\"gngt-actions\">\n        <mat-select #actionSel [disabled]=\"!selection.hasValue()\" [placeholder]=\"'Action' | translate\">\n          <mat-option value=\"delete\">{{ 'Delete' | translate }}</mat-option>\n        </mat-select>\n        <span class=\"gngt-spacer\"></span>\n        <button mat-raised-button [disabled]=\"!actionSel.value\"\n            (click)=\"processAction(actionSel.value)\">{{ 'Apply' | translate }}</button>\n      </div>\n      <span class=\"gngt-filler\"></span>\n      <mat-paginator [pageSizeOptions]=\"[20, 50, 100]\" showFirstLastButtons></mat-paginator>\n    </mat-toolbar>\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td class=\"gngt-select\" mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n      <ng-container *ngFor=\"let header of headers\"\n          [matColumnDef]=\"header.column\">\n        <ng-container *ngIf=\"header.sortable; else notSortable\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ header.label | translate }}</th>\n        </ng-container>\n        <ng-template #notSortable>\n          <th mat-header-cell *matHeaderCellDef>{{ header.label | translate }}</th>\n        </ng-template>\n        <td [routerLink]=\"baseEditUrl + element.id\" mat-cell *matCellDef=\"let element\">{{ element[header.column] }}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-card-content>\n</mat-card> -->\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: ["gngt-admin-list{display:block;position:relative}gngt-admin-list>div{height:100%}gngt-admin-list>div>ion-card{height:calc(100% - 20px)}gngt-admin-list>div>ion-card>ion-card-content{height:100%}\n"]
                },] }
    ];
    AdminListComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: AdminUserInteractionsService }
    ]; };
    AdminListComponent.propDecorators = {
        baseQueryParams: [{ type: core.Input }],
        infiniteScroll: [{ type: core.ViewChild, args: [angular.IonInfiniteScroll,] }]
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
    var AdminModule = /** @class */ (function () {
        function AdminModule() {
        }
        return AdminModule;
    }());
    AdminModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common$1.CommonModule,
                        admin.GngtAdminModule,
                        angular$1.GicModule,
                        common.CommonModule,
                        angular.IonicModule,
                        forms.ReactiveFormsModule,
                        router.RouterModule,
                        core$1.TranslateModule,
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

    exports.AdminEditComponent = AdminEditComponent;
    exports.AdminListComponent = AdminListComponent;
    exports.AdminModule = AdminModule;
    exports.AdminUserInteractionsService = AdminUserInteractionsService;
    exports.ɵgc_gngt_src_ionic_admin_admin_a = InputTypePipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic-admin.umd.js.map
