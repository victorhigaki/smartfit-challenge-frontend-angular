import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    const url = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';
    return this.httpClient.get(url);
  }
}
