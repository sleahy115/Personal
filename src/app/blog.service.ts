import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BlogService {
  blogs: FirebaseListObservable<any[]>;

 constructor(private database: AngularFireDatabase) {
   this.blogs = database.list('blogs');
 }
 //
 getBlogs() {
   return this.blogs;
 }
 //
 // addBlog(newBlog:Blog){
 //   this.blogs.push(newBlog);
 // }

}
