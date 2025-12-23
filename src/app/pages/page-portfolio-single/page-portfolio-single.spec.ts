import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioSingle } from './page-portfolio-single';

describe('PagePortfolioSingle', () => {
  let component: PagePortfolioSingle;
  let fixture: ComponentFixture<PagePortfolioSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePortfolioSingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePortfolioSingle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
