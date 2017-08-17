import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { BootcampArticleComponent } from './bootcamp-article/bootcamp-article.component';
import { GitArticleComponent } from './git-article/git-article.component';
import { ModuleWithProviders }  from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'blog/git',
        component: GitArticleComponent
    },
    {
        path: 'blog/bootcamp',
        component: BootcampArticleComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
