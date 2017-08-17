import { AdminComponent } from './admin/admin.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BootcampArticleComponent } from './bootcamp-article/bootcamp-article.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { GitArticleComponent } from './git-article/git-article.component';
import { masterFirebaseConfig } from './api-keys';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    BlogComponent,
    BootcampArticleComponent,
    GitArticleComponent,
    ProjectsComponent,
    ResumeComponent,
    WelcomeComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
