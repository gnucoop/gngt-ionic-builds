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
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AUTH_OPTIONS, AuthModule as CoreAuthModule, AuthUserInteractionsService as CoreAuthUserInteractionsService, JWT_OPTIONS, JwtHelperService, JwtInterceptor } from '@gngt/core/auth';
import { CommonModule as CoreCommonModule } from '@gngt/core/common';
import { CommonModule as IonicCommonModule } from '@gngt/ionic/common';
import { AlertController, IonicModule, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthUserInteractionsService } from './auth-user-interactions';
import { LoginComponent } from './login';
export class AuthModule {
    static forRoot(options) {
        return {
            ngModule: AuthModule,
            providers: [
                JwtHelperService,
                options.authOptionsProvider || { provide: AUTH_OPTIONS, useValue: options.authConfig },
                options.jwtOptionsProvider || { provide: JWT_OPTIONS, useValue: options.jwtConfig },
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            ]
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CoreAuthModule,
                    CoreCommonModule,
                    IonicCommonModule,
                    IonicModule,
                    ReactiveFormsModule,
                ],
                declarations: [
                    LoginComponent,
                ],
                exports: [
                    CoreAuthModule,
                    LoginComponent,
                ],
                providers: [{
                        provide: CoreAuthUserInteractionsService,
                        useClass: AuthUserInteractionsService,
                        deps: [TranslateService, AlertController, ToastController]
                    }]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW9uaWMvYXV0aC9hdXRoLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLFVBQVUsSUFBSSxjQUFjLEVBRTVCLDJCQUEyQixJQUFJLCtCQUErQixFQUM5RCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBQyxZQUFZLElBQUksZ0JBQWdCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsWUFBWSxJQUFJLGlCQUFpQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDckUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQXdCdkMsTUFBTSxPQUFPLFVBQVU7SUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUEwQjtRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULGdCQUFnQjtnQkFDaEIsT0FBTyxDQUFDLG1CQUFtQixJQUFJLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBQztnQkFDcEYsT0FBTyxDQUFDLGtCQUFrQixJQUFJLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBQztnQkFDakYsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO2FBQ3BFO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWpDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRTtvQkFDWixjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGNBQWM7aUJBQ2Y7Z0JBQ0QsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLCtCQUErQjt3QkFDeEMsUUFBUSxFQUFFLDJCQUEyQjt3QkFDckMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztxQkFDM0QsQ0FBQzthQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChDKSBHbnVjb29wIHNvYy4gY29vcC5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgR251Y29vcCBBbmd1bGFyIFRvb2xraXQgKGduZ3QpLlxuICpcbiAqIEdudWNvb3AgQW5ndWxhciBUb29sa2l0IChnbmd0KSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogR251Y29vcCBBbmd1bGFyIFRvb2xraXQgKGduZ3QpIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkuICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvLlxuICpcbiAqL1xuXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBVVRIX09QVElPTlMsXG4gIEF1dGhNb2R1bGUgYXMgQ29yZUF1dGhNb2R1bGUsXG4gIEF1dGhNb2R1bGVPcHRpb25zLFxuICBBdXRoVXNlckludGVyYWN0aW9uc1NlcnZpY2UgYXMgQ29yZUF1dGhVc2VySW50ZXJhY3Rpb25zU2VydmljZSxcbiAgSldUX09QVElPTlMsXG4gIEp3dEhlbHBlclNlcnZpY2UsXG4gIEp3dEludGVyY2VwdG9yXG59IGZyb20gJ0Bnbmd0L2NvcmUvYXV0aCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZSBhcyBDb3JlQ29tbW9uTW9kdWxlfSBmcm9tICdAZ25ndC9jb3JlL2NvbW1vbic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZSBhcyBJb25pY0NvbW1vbk1vZHVsZX0gZnJvbSAnQGduZ3QvaW9uaWMvY29tbW9uJztcbmltcG9ydCB7QWxlcnRDb250cm9sbGVyLCBJb25pY01vZHVsZSwgVG9hc3RDb250cm9sbGVyfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQge0F1dGhVc2VySW50ZXJhY3Rpb25zU2VydmljZX0gZnJvbSAnLi9hdXRoLXVzZXItaW50ZXJhY3Rpb25zJztcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvcmVBdXRoTW9kdWxlLFxuICAgIENvcmVDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTG9naW5Db21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb3JlQXV0aE1vZHVsZSxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IENvcmVBdXRoVXNlckludGVyYWN0aW9uc1NlcnZpY2UsXG4gICAgdXNlQ2xhc3M6IEF1dGhVc2VySW50ZXJhY3Rpb25zU2VydmljZSxcbiAgICBkZXBzOiBbVHJhbnNsYXRlU2VydmljZSwgQWxlcnRDb250cm9sbGVyLCBUb2FzdENvbnRyb2xsZXJdXG4gIH1dXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zOiBBdXRoTW9kdWxlT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXV0aE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXV0aE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBKd3RIZWxwZXJTZXJ2aWNlLFxuICAgICAgICBvcHRpb25zLmF1dGhPcHRpb25zUHJvdmlkZXIgfHwge3Byb3ZpZGU6IEFVVEhfT1BUSU9OUywgdXNlVmFsdWU6IG9wdGlvbnMuYXV0aENvbmZpZ30sXG4gICAgICAgIG9wdGlvbnMuand0T3B0aW9uc1Byb3ZpZGVyIHx8IHtwcm92aWRlOiBKV1RfT1BUSU9OUywgdXNlVmFsdWU6IG9wdGlvbnMuand0Q29uZmlnfSxcbiAgICAgICAge3Byb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSnd0SW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=