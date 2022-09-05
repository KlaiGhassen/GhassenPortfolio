import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  constructor(private http:HttpClient) { }  
  public getIPAddress()  
  {  
    return this.http.get("http://api.ipify.org/?format=json");  
  }
}
