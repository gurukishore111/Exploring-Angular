import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postUrls: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrls);
  }
  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrls, post, httpOptions);
  }
  updatePost(post: Post): Observable<Post> {
    const url = `${this.postUrls}/${post.id}`;

    return this.http.put<Post>(url, post, httpOptions);
  }
  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;

    const url = `${this.postUrls}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }
  getPostById(id: number): Observable<Post> {
    const url = `${this.postUrls}/${id}`;

    return this.http.get<Post>(url);
  }
}
