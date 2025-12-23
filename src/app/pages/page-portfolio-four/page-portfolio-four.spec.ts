import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioFour } from './page-portfolio-four';

describe('PagePortfolioFour', () => {
  let component: PagePortfolioFour;
  let fixture: ComponentFixture<PagePortfolioFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePortfolioFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePortfolioFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
