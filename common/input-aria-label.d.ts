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
import { AfterViewInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { IonInput } from '@ionic/angular';
export declare class InputAriaLabelDirective implements AfterViewInit, OnDestroy {
    private _input;
    private _el;
    private _renderer;
    private _inputLoadSub;
    constructor(_input: IonInput, _el: ElementRef, _renderer: Renderer2);
    private _gngtInputAriaLabel;
    set gngtInputAriaLabel(gngtInputAriaLabel: string);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private _updateLabel;
    private _setLabelOnChildren;
    private _setLabel;
}
