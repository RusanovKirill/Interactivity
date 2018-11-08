import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface User {
  colorName: string;
  hexValue: string;
}

@Injectable({
  providedIn: 'root'
})

export class TableServiceService {
  private serviceUrl = 'http://localhost:3001/api';
  constructor(private http: HttpClient){}

  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.serviceUrl);
  }
}
