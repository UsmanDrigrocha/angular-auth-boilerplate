import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtilsService } from './services/utils.service';


@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    public value: boolean;
    constructor(
        private _utilityService: UtilsService
    ) {
        this.value = false;
    }

    authPage = 'login'
    canActivate(): boolean {
        const isAuthenticated = this._utilityService.isAuthenticated()
        if (!isAuthenticated) {
            this._utilityService.navigateTo(this.authPage)
        }
        return true;
    }
}
