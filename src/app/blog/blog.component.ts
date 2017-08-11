import { BootcampArticleComponent } from '../bootcamp-article/bootcamp-article.component';
import { Component, OnInit } from '@angular/core';
import { GitArticleComponent } from '../git-article/git-article.component';
import { routing } from '../app.routing';

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
