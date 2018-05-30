import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContactoService {

  constructor(
    private http: Http
  ) { }
  sendMail(app: String, data: any ) {
    return this.http.post(`${environment.api}?app=${app}`, data)
    .map(response => response.json())
    .toPromise();
  }

}
