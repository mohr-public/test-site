import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPiePag } from './seccion-pie-pag';

describe('SeccionPiePag', () => {
  let component: SeccionPiePag;
  let fixture: ComponentFixture<SeccionPiePag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionPiePag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionPiePag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
