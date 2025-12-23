import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioTwo } from './page-portfolio-two';

describe('PagePortfolioTwo', () => {
  let component: PagePortfolioTwo;
  let fixture: ComponentFixture<PagePortfolioTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePortfolioTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePortfolioTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
