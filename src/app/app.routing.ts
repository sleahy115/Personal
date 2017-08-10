import { BlogComponent } from './blog/blog.component';
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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
