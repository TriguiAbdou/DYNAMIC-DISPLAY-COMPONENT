import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxBarGaugeComponent } from './jqx-bar-gauge.component';

describe('JqxBarGaugeComponent', () => {
  let component: JqxBarGaugeComponent;
  let fixture: ComponentFixture<JqxBarGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxBarGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxBarGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
