import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJob } from './page-job';

describe('PageJob', () => {
  let component: PageJob;
  let fixture: ComponentFixture<PageJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageJob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageJob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
