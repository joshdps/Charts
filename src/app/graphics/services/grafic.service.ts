import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficService {

  URLbase: string = 'http://localhost:3000/grafica' 
  constructor( private _http: HttpClient) { }

  getRRSSUsersCount(): Observable<{}>{
    const url = `${this.URLbase}`
    return this._http.get<{}>(url)
    
  }

}
