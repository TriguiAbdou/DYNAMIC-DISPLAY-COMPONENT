import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxTreeComponent } from './jqx-tree.component';

describe('JqxTreeComponent', () => {
  let component: JqxTreeComponent;
  let fixture: ComponentFixture<JqxTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
