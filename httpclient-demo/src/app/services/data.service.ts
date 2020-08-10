import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {dat} from '../classes/dat';
import {  throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url="http://localhost:5000/userbill/";
  constructor(public httpClient: HttpClient) { }
  public login(){
    return this.httpClient.get<dat[]>(this.url+"999");
  }

  // get requeest function
  public sendGetRequest(key):Observable<dat[]> {
    return this.httpClient.get<dat[]>(this.url+key);
  }


}
