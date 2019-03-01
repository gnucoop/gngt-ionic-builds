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
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@ngx-translate/core'), require('@ionic/angular'), require('@gngt/core/calendar')) :
    typeof define === 'function' && define.amd ? define('@gngt/ionic/calendar', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@ngx-translate/core', '@ionic/angular', '@gngt/core/calendar'], factory) :
    (global = global || self, factory((global.dewco = global.dewco || {}, global.dewco.ionic = global.dewco.ionic || {}, global.dewco.ionic.calendar = {}), global.ng.common, global.ng.core, global.ng.forms, global.ngxt.core, global.ionic.angular, global.gngt.core.calendar));
}(this, function (exports, common, core, forms, core$1, angular, calendar) { 'use strict';

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
    var CalendarComponent = /** @class */ (function (_super) {
        __extends(CalendarComponent, _super);
        function CalendarComponent(cdr) {
            return _super.call(this, cdr) || this;
        }
        CalendarComponent.decorators = [
            { type: core.Component, args: [{selector: 'gngt-calendar',
                        template: "<div class=\"gngt-calendar-header\"><ion-fab-button mini left [disabled]=\"disabled\" (click)=\"prevPage()\">&#8592;</ion-fab-button><ion-button [disabled]=\"disabled\" (click)=\"previousViewMode()\" light class=\"gngt-calendar-header-title\">{{ viewHeader | translate }}</ion-button><ion-fab-button mini right [disabled]=\"disabled\" (click)=\"nextPage()\">&#8594;</ion-fab-button></div><div class=\"gngt-calendar-row\" *ngIf=\"viewMode == 'month'\"><div *ngFor=\"let weekDay of weekDays\"><div class=\"button-label\">{{ weekDay | translate }}</div></div></div><div class=\"gngt-calendar-row\" *ngFor=\"let row of calendarRows\"><ion-button [color]=\"entry.selected == 'none' ? 'light' : 'danger'\" [disabled]=\"disabled || entry.disabled\" [class.ion-calendar-partial-selection]=\"entry.selected == 'partial'\" [class.ion-calendar-highlight]=\"entry.selected === 'none' && entry.highlight\" (click)=\"selectEntry(entry)\" *ngFor=\"let entry of row\">{{ entry }}</ion-button></div>",
                        styles: ["gngt-calendar{display:flex;box-sizing:border-box;width:100%;height:320px;flex-direction:column}gngt-calendar .gngt-calendar-header,gngt-calendar .gngt-calendar-row{display:flex;box-sizing:border-box;width:100%;flex-direction:row}gngt-calendar .gngt-calendar-header{height:40px}gngt-calendar .gngt-calendar-header ion-button,gngt-calendar .gngt-calendar-header ion-fab-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0}gngt-calendar .gngt-calendar-header ion-fab-button{position:relative;left:0;right:0}gngt-calendar .gngt-calendar-header ion-button{--height:40px;--width:100%}gngt-calendar .gngt-calendar-header .gngt-calendar-header-title{flex:1;margin:0 10px}gngt-calendar .gngt-calendar-row{flex:1}gngt-calendar .gngt-calendar-row div,gngt-calendar .gngt-calendar-row ion-button{flex:1;margin:3px;height:auto}gngt-calendar .gngt-calendar-row ion-button{--width:100%;--height:100%}gngt-calendar .gngt-calendar-row div{line-height:40px;text-align:center}gngt-calendar .gngt-calendar-row .gngt-calendar-partial-selection{--ion-color-base:rgba(240, 65, 65, 0.5)!important}gngt-calendar .gngt-calendar-row .gngt-calendar-highlight{--ion-color-base:#fcd739!important}"],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        inputs: [
                            'viewDate',
                            'disabled',
                            'dateOnlyForDay',
                            'viewMode',
                            'selectionMode',
                            'startOfWeekDay',
                            'isoMode',
                            'minDate',
                            'maxDate',
                            'selectedPeriod',
                        ],
                        outputs: [
                            'change'
                        ]
                    },] },
        ];
        /** @nocollapse */
        CalendarComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        return CalendarComponent;
    }(calendar.Calendar));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarModule = /** @class */ (function () {
        function CalendarModule() {
        }
        CalendarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            core$1.TranslateModule,
                            angular.IonicModule,
                        ],
                        declarations: [
                            CalendarComponent,
                        ],
                        exports: [
                            CalendarComponent,
                        ],
                    },] },
        ];
        return CalendarModule;
    }());

    exports.CalendarModule = CalendarModule;
    exports.ɵa = CalendarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ionic-calendar.umd.js.map
