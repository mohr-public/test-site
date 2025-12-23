import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMe } from './page-about-me';

describe('PageAboutMe', () => {
  let component: PageAboutMe;
  let fixture: ComponentFixture<PageAboutMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
