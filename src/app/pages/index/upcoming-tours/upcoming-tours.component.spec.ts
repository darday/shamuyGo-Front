import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingToursComponent } from './upcoming-tours.component';

describe('UpcomingToursComponent', () => {
  let component: UpcomingToursComponent;
  let fixture: ComponentFixture<UpcomingToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
