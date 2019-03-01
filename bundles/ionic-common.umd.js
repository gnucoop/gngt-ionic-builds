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
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@ionic/angular')) :
    typeof define === 'function' && define.amd ? define('@gngt/ionic/common', ['exports', '@angular/core', 'rxjs', '@ionic/angular'], factory) :
    (global = global || self, factory((global.dewco = global.dewco || {}, global.dewco.ionic = global.dewco.ionic || {}, global.dewco.ionic.common = {}), global.ng.core, global.rxjs, global.ionic.angular));
}(this, function (exports, core, rxjs, angular) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputAriaLabelDirective = /** @class */ (function () {
        function InputAriaLabelDirective(_input, _el, _renderer) {
            this._input = _input;
            this._el = _el;
            this._renderer = _renderer;
            this._inputLoadSub = rxjs.Subscription.EMPTY;
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
            { type: core.Directive, args: [{ selector: '[gngtInputAriaLabel]' },] },
        ];
        /** @nocollapse */
        InputAriaLabelDirective.ctorParameters = function () { return [
            { type: angular.IonInput, decorators: [{ type: core.Host }, { type: core.Optional }] },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        InputAriaLabelDirective.propDecorators = {
            gngtInputAriaLabel: [{ type: core.Input, args: ['gngtInputAriaLabel',] }]
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
            { type: core.NgModule, args: [{
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

    exports.CommonModule = CommonModule;
    exports.InputAriaLabelDirective = InputAriaLabelDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ionic-common.umd.js.map
