import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogStandard } from './page-blog-standard';

describe('PageBlogStandard', () => {
  let component: PageBlogStandard;
  let fixture: ComponentFixture<PageBlogStandard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBlogStandard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogStandard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
