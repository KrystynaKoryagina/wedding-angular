import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, AuthResponse } from '../interfaces/interfaces';
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	error$: Subject<string> = new Subject<string>();

	constructor(private http: HttpClient) {}

	private setToken(response: AuthResponse | null) {
		if (response) {
			localStorage.setItem('auth-token', response.access_token);		
		} else {
			localStorage.clear();
		}
	}

	private handleError(err: HttpErrorResponse) {
		const message = err.error.message;

		this.error$.next(message);

		return throwError(err);
	}

	get token(): string {
		return localStorage.getItem('auth-token');
	}

	login(user: User): Observable<AuthResponse> {
		return this.http.post(`${environment.baseUrl}/app/api/v1/user/login`, user)
			.pipe(
				tap(this.setToken),
				catchError(this.handleError.bind(this))
			)
	}

	logout():void {
		this.setToken(null);
	}

	isAuth(): boolean {
		return !!this.token;
	}
}