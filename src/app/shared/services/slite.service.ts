import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable()
export class SliteService {

  constructor(
    private http: Http
  ) { }
  getSlites() {
    return this.http.get(`${environment.api}?app=slites`)
    .map(response => response.json())
    .toPromise();
  }
}
