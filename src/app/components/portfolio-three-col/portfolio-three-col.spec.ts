import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioThreeCol } from './portfolio-three-col';

describe('PortfolioThreeCol', () => {
  let component: PortfolioThreeCol;
  let fixture: ComponentFixture<PortfolioThreeCol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioThreeCol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioThreeCol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
