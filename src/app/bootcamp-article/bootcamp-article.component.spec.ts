import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampArticleComponent } from './bootcamp-article.component';

describe('BootcampArticleComponent', () => {
  let component: BootcampArticleComponent;
  let fixture: ComponentFixture<BootcampArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootcampArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
