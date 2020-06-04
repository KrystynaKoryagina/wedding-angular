import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) {}

	getAllSection(): Observable<Section[]> {
		return this.http.get<Section[]>(`${environment.baseUrl}/app/api/v1/section`)
			.pipe(
				tap(response => response["content"]))	
	}

	getSectionByType(type: string): Observable<Section> {
		return this.http.get<Section>(`${environment.baseUrl}/app/api/v1/section/${type}`)
	}
}