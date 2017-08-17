import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class BlogService {
  gymnasts: FirebaseListObservable<any[]>;

 constructor(private angularFire: AngularFire) {
   this.blogs = angularFire.database.list('blogs');
 }

 getBlogs() {
   return this.blogs;
 }

 addBlog(newBlog:Blog){
   this.blogs.push(newBlog);
 }



  constructor() { }

}
