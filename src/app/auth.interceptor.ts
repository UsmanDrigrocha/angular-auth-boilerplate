import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { StorageService } from 'src/app/services/storage.service';
// import { PopupsService } from 'src/app/services/popups.service';
import { UtilsService } from './services/utils.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private _utility: UtilsService,
    ) { }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Clone the request object
        let newReq = req.clone();
        newReq = req.clone({
            headers: req.headers.set(
                'Authorization',
                'Bearer ' + this._utility.getToken(),
            ).set('Access-Control-Allow-Origin', '*'),
        });
        // Response
        return next.handle(newReq).pipe(
            catchError((error) => {

                // Catch "401 Unauthorized" responses
                if ((error instanceof HttpErrorResponse && error.status === 401) || error.status == 401) {
                    this._utility.deleteToken();
                } else if (
                    error instanceof HttpErrorResponse &&
                    (error.status === 500 || error.status === 400)
                ) {

                }
                return throwError(() => new HttpErrorResponse(error));
            })
        );
    }
}
