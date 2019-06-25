import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponsePosts} from '../interfaces/response-posts.interface';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
    console.log(http);
  }

  async getPosts() {
    const url ='assets/posts.json';
    const response= await this.http.get<IResponsePosts>(url).toPromise();
    return response.posts;
  }

}

