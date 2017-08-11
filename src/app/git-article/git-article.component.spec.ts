import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitArticleComponent } from './git-article.component';

describe('GitArticleComponent', () => {
  let component: GitArticleComponent;
  let fixture: ComponentFixture<GitArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
