import { Component, OnInit } from '@angular/core';
import { routing } from '../app.routing';
import { GitArticleComponent } from '../git-article/git-article.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
