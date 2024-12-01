import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteprisesComponent } from './enteprises.component';

describe('EnteprisesComponent', () => {
  let component: EnteprisesComponent;
  let fixture: ComponentFixture<EnteprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnteprisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnteprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
