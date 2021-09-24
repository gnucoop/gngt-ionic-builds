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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginComponent as CoreLoginComponent } from '@gngt/core/auth';
import { Store } from '@ngrx/store';
export class LoginComponent extends CoreLoginComponent {
    constructor(fb, store, cdr) {
        super(fb, store, cdr);
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'gngt-login',
                template: "<ion-list\n    [formGroup]=\"loginForm\"\n    [gngtFormDisabled]=\"disabled\"\n    class=\"login-form\"\n    (keyup.enter)=\"login()\"\n>\n  <ion-item>\n    <ion-label *ngIf=\"showLabels\">\n      <ng-content select=\"[gngtLoginUsername]\"></ng-content>\n    </ion-label>\n    <ion-input\n        [gngtInputAriaLabel]=\"usernamePlaceholder\"\n        [placeholder]=\"usernamePlaceholder\"\n        autocomplete=\"on\"\n        formControlName=\"username\"\n    ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label *ngIf=\"showLabels\">\n      <ng-content select=\"[gngtLoginPassword]\"></ng-content>\n    </ion-label>\n    <ion-input\n        [gngtInputAriaLabel]=\"passwordPlaceholder\"\n        [placeholder]=\"passwordPlaceholder\"\n        type=\"password\"\n        autocomplete=\"on\"\n        formControlName=\"password\"\n    ></ion-input>\n  </ion-item>\n  <ng-content></ng-content>\n</ion-list>\n<div class=\"ion-actions\">\n  <ion-button\n      [disabled]=\"(valid|async) === false\"\n      (click)=\"login()\"\n  >\n    <ng-content select=\"[gngtLoginAction]\"></ng-content>\n  </ion-button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["gngt-login{display:flex;align-items:center;justify-content:center;flex-direction:column}gngt-login .ion-actions{padding-top:1em;text-align:right}\n"]
            },] }
];
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Store },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvYXV0aC9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUdILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLElBQUksa0JBQWtCLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7QUFDekYsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQVNsQyxNQUFNLE9BQU8sY0FBZSxTQUFRLGtCQUFrQjtJQUNwRCxZQUFZLEVBQWUsRUFBRSxLQUF1QixFQUFFLEdBQXNCO1FBQzFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMm1DQUF5QjtnQkFFekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O1lBVk8sV0FBVztZQUVYLEtBQUs7WUFOWCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkuXG4gKlxuICogR251Y29vcCBBbmd1bGFyIFRvb2xraXQgKGduZ3QpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEdudWNvb3AgQW5ndWxhciBUb29sa2l0IChnbmd0KS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7Qm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudCBhcyBDb3JlTG9naW5Db21wb25lbnQsIFN0YXRlIGFzIEF1dGhTdGF0ZX0gZnJvbSAnQGduZ3QvY29yZS9hdXRoJztcbmltcG9ydCB7U3RvcmV9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ25ndC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnbG9naW4uaHRtbCcsXG4gIHN0eWxlVXJsczogWydsb2dpbi5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgQ29yZUxvZ2luQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBzdG9yZTogU3RvcmU8QXV0aFN0YXRlPiwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGZiLCBzdG9yZSwgY2RyKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93TGFiZWxzOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=