import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFaq } from './page-faq';

describe('PageFaq', () => {
  let component: PageFaq;
  let fixture: ComponentFixture<PageFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFaq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
