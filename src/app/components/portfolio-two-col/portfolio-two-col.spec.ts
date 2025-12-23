import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTwoCol } from './portfolio-two-col';

describe('PortfolioTwoCol', () => {
  let component: PortfolioTwoCol;
  let fixture: ComponentFixture<PortfolioTwoCol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioTwoCol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioTwoCol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
