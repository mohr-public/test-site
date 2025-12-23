import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTypography } from './page-typography';

describe('PageTypography', () => {
  let component: PageTypography;
  let fixture: ComponentFixture<PageTypography>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTypography]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTypography);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
