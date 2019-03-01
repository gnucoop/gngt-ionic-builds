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
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { Calendar } from '@gngt/core/calendar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarComponent extends Calendar {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        super(cdr);
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{selector: 'gngt-calendar',
                template: "<div class=\"gngt-calendar-header\"><ion-fab-button mini left [disabled]=\"disabled\" (click)=\"prevPage()\">&#8592;</ion-fab-button><ion-button [disabled]=\"disabled\" (click)=\"previousViewMode()\" light class=\"gngt-calendar-header-title\">{{ viewHeader | translate }}</ion-button><ion-fab-button mini right [disabled]=\"disabled\" (click)=\"nextPage()\">&#8594;</ion-fab-button></div><div class=\"gngt-calendar-row\" *ngIf=\"viewMode == 'month'\"><div *ngFor=\"let weekDay of weekDays\"><div class=\"button-label\">{{ weekDay | translate }}</div></div></div><div class=\"gngt-calendar-row\" *ngFor=\"let row of calendarRows\"><ion-button [color]=\"entry.selected == 'none' ? 'light' : 'danger'\" [disabled]=\"disabled || entry.disabled\" [class.ion-calendar-partial-selection]=\"entry.selected == 'partial'\" [class.ion-calendar-highlight]=\"entry.selected === 'none' && entry.highlight\" (click)=\"selectEntry(entry)\" *ngFor=\"let entry of row\">{{ entry }}</ion-button></div>",
                styles: ["gngt-calendar{display:flex;box-sizing:border-box;width:100%;height:320px;flex-direction:column}gngt-calendar .gngt-calendar-header,gngt-calendar .gngt-calendar-row{display:flex;box-sizing:border-box;width:100%;flex-direction:row}gngt-calendar .gngt-calendar-header{height:40px}gngt-calendar .gngt-calendar-header ion-button,gngt-calendar .gngt-calendar-header ion-fab-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0}gngt-calendar .gngt-calendar-header ion-fab-button{position:relative;left:0;right:0}gngt-calendar .gngt-calendar-header ion-button{--height:40px;--width:100%}gngt-calendar .gngt-calendar-header .gngt-calendar-header-title{flex:1;margin:0 10px}gngt-calendar .gngt-calendar-row{flex:1}gngt-calendar .gngt-calendar-row div,gngt-calendar .gngt-calendar-row ion-button{flex:1;margin:3px;height:auto}gngt-calendar .gngt-calendar-row ion-button{--width:100%;--height:100%}gngt-calendar .gngt-calendar-row div{line-height:40px;text-align:center}gngt-calendar .gngt-calendar-row .gngt-calendar-partial-selection{--ion-color-base:rgba(240, 65, 65, 0.5)!important}gngt-calendar .gngt-calendar-row .gngt-calendar-highlight{--ion-color-base:#fcd739!important}"],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
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
CalendarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarModule {
}
CalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    TranslateModule,
                    IonicModule,
                ],
                declarations: [
                    CalendarComponent,
                ],
                exports: [
                    CalendarComponent,
                ],
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

export { CalendarModule, CalendarComponent as ɵa };
//# sourceMappingURL=calendar.js.map
