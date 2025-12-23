import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioThree } from './page-portfolio-three';

describe('PagePortfolioThree', () => {
  let component: PagePortfolioThree;
  let fixture: ComponentFixture<PagePortfolioThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePortfolioThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePortfolioThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
