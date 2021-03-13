import { IPost } from './../models/Post';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { NewPost } from '../models/NewPost';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    baseUrl = environment.apiUrl + 'post';
    private postsSource = new ReplaySubject<IPost[]>(1);
    posts$ = this.postsSource.asObservable();
    posts: IPost[];
    post: IPost;

    constructor(private apiCaller: HttpClient) {}

    getPosts() {
        return this.apiCaller.get<IPost[]>(this.baseUrl).pipe(
            map(
                (res: IPost[]) => {
                    res = this.posts;
                    localStorage.setItem("user_posts", JSON.stringify(res));
                    this.postsSource.next(res);
            })
        );
    }

    addPost(post: NewPost) {
        return this.apiCaller.post<IPost>(this.baseUrl, post).pipe(
            map(
                (res: IPost) => {
                    if(this.posts) {
                        this.posts.push(res);
                        localStorage.setItem("user_posts", JSON.stringify(this.posts));
                    }
                    
                }
            )
        );
    }

}