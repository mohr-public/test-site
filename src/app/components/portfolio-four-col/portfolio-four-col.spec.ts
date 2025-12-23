import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFourCol } from './portfolio-four-col';

describe('PortfolioFourCol', () => {
  let component: PortfolioFourCol;
  let fixture: ComponentFixture<PortfolioFourCol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioFourCol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioFourCol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
