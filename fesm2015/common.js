import { Directive, Host, Optional, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subscription } from 'rxjs';

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
class InputAriaLabelDirective {
    constructor(_input, _el, _renderer) {
        this._input = _input;
        this._el = _el;
        this._renderer = _renderer;
        this._inputLoadSub = Subscription.EMPTY;
    }
    set gngtInputAriaLabel(gngtInputAriaLabel) {
        this._gngtInputAriaLabel = gngtInputAriaLabel;
        this._updateLabel();
    }
    ngAfterViewInit() {
        this._updateLabel();
    }
    ngOnDestroy() {
        this._inputLoadSub.unsubscribe();
    }
    _updateLabel() {
        if (this._input && this._el) {
            const el = this._el.nativeElement;
            if (el) {
                this._setLabelOnChildren(el.getElementsByTagName('input'));
                if (el.shadowRoot) {
                    this._setLabelOnChildren(el.shadowRoot.querySelectorAll('input'));
                }
            }
        }
    }
    _setLabelOnChildren(inputs) {
        const inputsNum = inputs.length;
        for (let i = 0; i < inputsNum; i++) {
            const input = inputs.item(i);
            if (input) {
                this._setLabel(input);
            }
        }
    }
    _setLabel(el) {
        this._renderer.setAttribute(el, 'aria-label', this._gngtInputAriaLabel);
    }
}
InputAriaLabelDirective.decorators = [
    { type: Directive, args: [{ selector: '[gngtInputAriaLabel]' },] }
];
InputAriaLabelDirective.ctorParameters = () => [
    { type: IonInput, decorators: [{ type: Host }, { type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 }
];
InputAriaLabelDirective.propDecorators = {
    gngtInputAriaLabel: [{ type: Input, args: ['gngtInputAriaLabel',] }]
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
class CommonModule {
}
CommonModule.decorators = [
    { type: NgModule, args: [{
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

export { CommonModule, InputAriaLabelDirective };
//# sourceMappingURL=common.js.map
