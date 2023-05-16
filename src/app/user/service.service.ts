import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  product(){
    return this.http.get('https://zil-test.s3.us-east-1.amazonaws.com/json-data.json')
  }
}
