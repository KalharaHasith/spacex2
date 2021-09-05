import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getApiData(){
    return this.http.get('https://api.spacexdata.com/v2/launches');
  }
}
