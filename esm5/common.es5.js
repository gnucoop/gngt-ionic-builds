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
import { Directive, Host, Optional, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { Subscription } from 'rxjs';
import { IonInput } from '@ionic/angular';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputAriaLabelDirective = /** @class */ (function () {
    function InputAriaLabelDirective(_input, _el, _renderer) {
        this._input = _input;
        this._el = _el;
        this._renderer = _renderer;
        this._inputLoadSub = Subscription.EMPTY;
    }
    Object.defineProperty(InputAriaLabelDirective.prototype, "gngtInputAriaLabel", {
        set: /**
         * @param {?} gngtInputAriaLabel
         * @return {?}
         */
        function (gngtInputAriaLabel) {
            this._gngtInputAriaLabel = gngtInputAriaLabel;
            this._updateLabel();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    InputAriaLabelDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._updateLabel();
    };
    /**
     * @return {?}
     */
    InputAriaLabelDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._inputLoadSub.unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    InputAriaLabelDirective.prototype._updateLabel = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._input && this._el) {
            /** @type {?} */
            var el = (/** @type {?} */ (this._el.nativeElement));
            if (el) {
                this._setLabelOnChildren(el.getElementsByTagName('input'));
                if (el.shadowRoot) {
                    this._setLabelOnChildren(el.shadowRoot.querySelectorAll('input'));
                }
            }
        }
    };
    /**
     * @private
     * @param {?} inputs
     * @return {?}
     */
    InputAriaLabelDirective.prototype._setLabelOnChildren = /**
     * @private
     * @param {?} inputs
     * @return {?}
     */
    function (inputs) {
        /** @type {?} */
        var inputsNum = inputs.length;
        for (var i = 0; i < inputsNum; i++) {
            /** @type {?} */
            var input = inputs.item(i);
            if (input) {
                this._setLabel(input);
            }
        }
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    InputAriaLabelDirective.prototype._setLabel = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        this._renderer.setAttribute(el, 'aria-label', this._gngtInputAriaLabel);
    };
    InputAriaLabelDirective.decorators = [
        { type: Directive, args: [{ selector: '[gngtInputAriaLabel]' },] },
    ];
    /** @nocollapse */
    InputAriaLabelDirective.ctorParameters = function () { return [
        { type: IonInput, decorators: [{ type: Host }, { type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    InputAriaLabelDirective.propDecorators = {
        gngtInputAriaLabel: [{ type: Input, args: ['gngtInputAriaLabel',] }]
    };
    return InputAriaLabelDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        InputAriaLabelDirective,
                    ],
                    exports: [
                        InputAriaLabelDirective,
                    ]
                },] },
    ];
    return CommonModule;
}());

export { CommonModule, InputAriaLabelDirective };
//# sourceMappingURL=common.es5.js.map
