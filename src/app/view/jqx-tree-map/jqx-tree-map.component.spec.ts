import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxTreeMapComponent } from './jqx-tree-map.component';

describe('JqxTreeMapComponent', () => {
  let component: JqxTreeMapComponent;
  let fixture: ComponentFixture<JqxTreeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxTreeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxTreeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
