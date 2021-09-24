(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic/angular'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@gngt/ionic/common', ['exports', '@angular/core', '@ionic/angular', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.gngt = global.gngt || {}, global.gngt.ionic = global.gngt.ionic || {}, global.gngt.ionic.common = {}), global.ng.core, global.ionic.angular, global.rxjs));
}(this, (function (exports, core, angular, rxjs) { 'use strict';

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
    var InputAriaLabelDirective = /** @class */ (function () {
        function InputAriaLabelDirective(_input, _el, _renderer) {
            this._input = _input;
            this._el = _el;
            this._renderer = _renderer;
            this._inputLoadSub = rxjs.Subscription.EMPTY;
        }
        Object.defineProperty(InputAriaLabelDirective.prototype, "gngtInputAriaLabel", {
            set: function (gngtInputAriaLabel) {
                this._gngtInputAriaLabel = gngtInputAriaLabel;
                this._updateLabel();
            },
            enumerable: false,
            configurable: true
        });
        InputAriaLabelDirective.prototype.ngAfterViewInit = function () {
            this._updateLabel();
        };
        InputAriaLabelDirective.prototype.ngOnDestroy = function () {
            this._inputLoadSub.unsubscribe();
        };
        InputAriaLabelDirective.prototype._updateLabel = function () {
            if (this._input && this._el) {
                var el = this._el.nativeElement;
                if (el) {
                    this._setLabelOnChildren(el.getElementsByTagName('input'));
                    if (el.shadowRoot) {
                        this._setLabelOnChildren(el.shadowRoot.querySelectorAll('input'));
                    }
                }
            }
        };
        InputAriaLabelDirective.prototype._setLabelOnChildren = function (inputs) {
            var inputsNum = inputs.length;
            for (var i = 0; i < inputsNum; i++) {
                var input = inputs.item(i);
                if (input) {
                    this._setLabel(input);
                }
            }
        };
        InputAriaLabelDirective.prototype._setLabel = function (el) {
            this._renderer.setAttribute(el, 'aria-label', this._gngtInputAriaLabel);
        };
        return InputAriaLabelDirective;
    }());
    InputAriaLabelDirective.decorators = [
        { type: core.Directive, args: [{ selector: '[gngtInputAriaLabel]' },] }
    ];
    InputAriaLabelDirective.ctorParameters = function () { return [
        { type: angular.IonInput, decorators: [{ type: core.Host }, { type: core.Optional }] },
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    InputAriaLabelDirective.propDecorators = {
        gngtInputAriaLabel: [{ type: core.Input, args: ['gngtInputAriaLabel',] }]
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
    var CommonModule = /** @class */ (function () {
        function CommonModule() {
        }
        return CommonModule;
    }());
    CommonModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        InputAriaLabelDirective,
                    ],
                    exports: [
                        InputAriaLabelDirective,
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

    exports.CommonModule = CommonModule;
    exports.InputAriaLabelDirective = InputAriaLabelDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic-common.umd.js.map
