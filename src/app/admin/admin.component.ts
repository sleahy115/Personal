import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BlogService]
})
export class AdminComponent implements OnInit {

  constructor(private blogService:BlogService) { }

  ngOnInit() {
  }
  submitNewBlog(title:string, date:any, author:string, entry:string) {

  var newBlog: Blog = new Blog(title, date, author, entry);
  this.blogService.addBlog(newBlog);
}

}
