import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutUs } from './page-about-us';

describe('PageAboutUs', () => {
  let component: PageAboutUs;
  let fixture: ComponentFixture<PageAboutUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
