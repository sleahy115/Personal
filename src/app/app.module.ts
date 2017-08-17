import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BootcampArticleComponent } from './bootcamp-article/bootcamp-article.component';
import { FormsModule }   from '@angular/forms';
import { GitArticleComponent } from './git-article/git-article.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    BlogComponent,
    ResumeComponent,
    WelcomeComponent,
    GitArticleComponent,
    BootcampArticleComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
