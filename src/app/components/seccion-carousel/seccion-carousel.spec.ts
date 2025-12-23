import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCarousel } from './seccion-carousel';

describe('SeccionCarousel', () => {
  let component: SeccionCarousel;
  let fixture: ComponentFixture<SeccionCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
