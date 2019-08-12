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
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AuthUserInteractionsService as CoreAuthUserInteractionsService } from '@gngt/core/auth';
export declare class AuthUserInteractionsService extends CoreAuthUserInteractionsService {
    private _ts;
    private _alert;
    private _toast;
    constructor(_ts: TranslateService, _alert: AlertController, _toast: ToastController);
    askLogoutConfirm(): Observable<boolean>;
    showLoginError(error: string): void;
}
