import { Injectable } from '@angular/core';
import { Comments } from '../models/comments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  private commentURL = "http://localhost:8883/api";
  private unameURL="http://localhost:8883/userapi";
  constructor(private httpClient: HttpClient) { }

  addCommet(c:Comments): Observable<boolean>
  {
    return this.httpClient.post<boolean>(`${this.commentURL}/post`,c);
  }
  getComments(blogid:number):Observable<Comments[]>
  {
    return this.httpClient.get<Comments[]>(`${this.commentURL}/getbyblog/${blogid}`);
  }
  getUname(uid:number):Observable<Comments>
  {
    return this.httpClient.get<Comments>(`${this.unameURL}/sp/${uid}`);
  }
}
