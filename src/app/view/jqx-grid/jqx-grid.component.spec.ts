import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxGridComponent } from './jqx-grid.component';

describe('JqxGridComponent', () => {
  let component: JqxGridComponent;
  let fixture: ComponentFixture<JqxGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
