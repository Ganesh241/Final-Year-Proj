import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBlogComponent } from './show-blog.component';

describe('ShowBlogComponent', () => {
  let component: ShowBlogComponent;
  let fixture: ComponentFixture<ShowBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBlogComponent]
    });
    fixture = TestBed.createComponent(ShowBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
