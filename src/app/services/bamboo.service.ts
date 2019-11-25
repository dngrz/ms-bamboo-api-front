import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BambooService {

  private URL = "http://localhost:7100/rest/api";

  constructor(private http: HttpClient) { }

  getApi(){
    return this.http.get<any>(this.URL+"/bamboo");
  }
}
