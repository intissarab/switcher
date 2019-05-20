import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposePage } from './propose.page';

describe('ProposePage', () => {
  let component: ProposePage;
  let fixture: ComponentFixture<ProposePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
