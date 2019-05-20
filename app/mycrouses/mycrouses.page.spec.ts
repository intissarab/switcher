import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycrousesPage } from './mycrouses.page';

describe('MycrousesPage', () => {
  let component: MycrousesPage;
  let fixture: ComponentFixture<MycrousesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycrousesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycrousesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
