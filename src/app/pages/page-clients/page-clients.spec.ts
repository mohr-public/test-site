import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClients } from './page-clients';

describe('PageClients', () => {
  let component: PageClients;
  let fixture: ComponentFixture<PageClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageClients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageClients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
