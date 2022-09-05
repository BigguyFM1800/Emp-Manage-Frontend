import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = "http://localhost:5050/api/"

  constructor(private http: HttpClient) { }

  login(body:any)  {
    return this.http.post(this.baseUrl + 'login', body);
  }

  register(body:any){
    return this.http.post(this.baseUrl  + 'register',body);
  }

  getAll(){
    return this.http.get(this.baseUrl+'getAll');
  }

  get(id: any) {
    return this.http.get(`${this.baseUrl}getById/${id}`);
  }

  // create(data: any) {
  //   return this.http.post(this.baseUrl, data);
  // }

  update(id: any, data: any) {
    return this.http.put(`${this.baseUrl}/users/updateUser/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${this.baseUrl}/users/deleteUser/${id}`);
  }

  // deleteAll() {
  //   return this.http.delete(this.baseUrl);
  // }
  
  // findByTitle(title: any){
  //   return this.http.get(`${this.baseUrl}?title=${title}`);
  // }
}
