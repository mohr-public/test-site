import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogSingle } from './page-blog-single';

describe('PageBlogSingle', () => {
  let component: PageBlogSingle;
  let fixture: ComponentFixture<PageBlogSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBlogSingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogSingle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
