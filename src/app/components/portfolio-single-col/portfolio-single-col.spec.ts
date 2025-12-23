import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSingleCol } from './portfolio-single-col';

describe('PortfolioSingleCol', () => {
  let component: PortfolioSingleCol;
  let fixture: ComponentFixture<PortfolioSingleCol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSingleCol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSingleCol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
