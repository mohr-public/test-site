import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCabPag } from './seccion-cab-pag';

describe('SeccionCabPag', () => {
  let component: SeccionCabPag;
  let fixture: ComponentFixture<SeccionCabPag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionCabPag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCabPag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
