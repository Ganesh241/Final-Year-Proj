import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../auth/login/login.component';
import { Users, blog, login } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURL = "http://localhost:8883/userapi/users";
  private LogURL = "http://localhost:8883/userapi/login";
  private blogURL = "http://localhost:8883/Blogapi/getblog";
  private blogURLByTag = "http://localhost:8883/Blogapi/getblogbytag";


  constructor(private httpClient: HttpClient) { }

  createUser(userData:Users):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, userData);
  }

  checkuname(user:Users) : Observable<boolean>{
    return this.httpClient.post<boolean>(`${this.baseURL}/check`,user);
  }
  
  
  checkuser(login:login) : Observable<boolean>
  {
      return this.httpClient.post<boolean>(`${this.LogURL}`,login);
  }
  
  udata(uname:any) : Observable<object>
  {
    return this.httpClient.get<object>(`${this.baseURL}/${uname}`);
  }

  blogData() : Observable<  blog[]>
  {  
    let vl = sessionStorage.getItem('userid')
    let vs = parseInt(vl || '')
    
    return this.httpClient.get<blog[]>(`${this.blogURL}/${vs}`);
  }
  getByTags(tag:string): Observable<  blog[]>
  {
    return this.httpClient.get<blog[]>(`${this.blogURLByTag}/${tag}`);
  }
}
