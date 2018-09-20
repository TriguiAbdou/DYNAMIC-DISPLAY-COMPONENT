import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxChartComponent } from './jqx-chart.component';

describe('JqxChartComponent', () => {
  let component: JqxChartComponent;
  let fixture: ComponentFixture<JqxChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
