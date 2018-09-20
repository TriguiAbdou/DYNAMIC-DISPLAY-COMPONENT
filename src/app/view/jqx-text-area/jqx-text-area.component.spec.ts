import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxTextAreaComponent } from './jqx-text-area.component';

describe('JqxTextAreaComponent', () => {
  let component: JqxTextAreaComponent;
  let fixture: ComponentFixture<JqxTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
