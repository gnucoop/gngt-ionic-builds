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
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subscription } from 'rxjs';
export class InputAriaLabelDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYXJpYS1sYWJlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pb25pYy9jb21tb24vaW5wdXQtYXJpYS1sYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUVILE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUdsQyxNQUFNLE9BQU8sdUJBQXVCO0lBR2xDLFlBQ2dDLE1BQWdCLEVBQVUsR0FBZSxFQUM3RCxTQUFvQjtRQURBLFdBQU0sR0FBTixNQUFNLENBQVU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQzdELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFKeEIsa0JBQWEsR0FBaUIsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUl0QixDQUFDO0lBR3BDLElBQ0ksa0JBQWtCLENBQUMsa0JBQTBCO1FBQy9DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzNCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBNEIsQ0FBQztZQUNqRCxJQUFJLEVBQUUsRUFBRTtnQkFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBRTNELElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRTtvQkFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDbkU7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVPLG1CQUFtQixDQUFDLE1BQzRCO1FBQ3RELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7SUFFTyxTQUFTLENBQUMsRUFBb0I7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7WUFqREYsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFDOzs7WUFIckMsUUFBUSx1QkFRVCxJQUFJLFlBQUksUUFBUTtZQWZyQixVQUFVO1lBS1YsU0FBUzs7O2lDQWNSLEtBQUssU0FBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkuXG4gKlxuICogR251Y29vcCBBbmd1bGFyIFRvb2xraXQgKGduZ3QpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEdudWNvb3AgQW5ndWxhciBUb29sa2l0IChnbmd0KS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW9uSW5wdXR9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZ25ndElucHV0QXJpYUxhYmVsXSd9KVxuZXhwb3J0IGNsYXNzIElucHV0QXJpYUxhYmVsRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfaW5wdXRMb2FkU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgX2lucHV0OiBJb25JbnB1dCwgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIHByaXZhdGUgX2duZ3RJbnB1dEFyaWFMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoJ2duZ3RJbnB1dEFyaWFMYWJlbCcpXG4gIHNldCBnbmd0SW5wdXRBcmlhTGFiZWwoZ25ndElucHV0QXJpYUxhYmVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9nbmd0SW5wdXRBcmlhTGFiZWwgPSBnbmd0SW5wdXRBcmlhTGFiZWw7XG4gICAgdGhpcy5fdXBkYXRlTGFiZWwoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl91cGRhdGVMYWJlbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5faW5wdXRMb2FkU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVMYWJlbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5wdXQgJiYgdGhpcy5fZWwpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICB0aGlzLl9zZXRMYWJlbE9uQ2hpbGRyZW4oZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JykpO1xuXG4gICAgICAgIGlmIChlbC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgdGhpcy5fc2V0TGFiZWxPbkNoaWxkcmVuKGVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRMYWJlbE9uQ2hpbGRyZW4oaW5wdXRzOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxJbnB1dEVsZW1lbnQ+fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0c051bSA9IGlucHV0cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHNOdW07IGkrKykge1xuICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dHMuaXRlbShpKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICB0aGlzLl9zZXRMYWJlbChpbnB1dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0TGFiZWwoZWw6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdhcmlhLWxhYmVsJywgdGhpcy5fZ25ndElucHV0QXJpYUxhYmVsKTtcbiAgfVxufVxuIl19