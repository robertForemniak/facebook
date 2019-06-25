import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
    console.log(http);
  }

  getPosts() {
    return this.http.get('assets/posts.json').toPromise();
  }

}

