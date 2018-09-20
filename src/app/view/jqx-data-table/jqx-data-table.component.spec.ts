import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxDataTableComponent } from './jqx-data-table.component';

describe('JqxDataTableComponent', () => {
  let component: JqxDataTableComponent;
  let fixture: ComponentFixture<JqxDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
