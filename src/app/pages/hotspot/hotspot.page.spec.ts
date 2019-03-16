import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotPage } from './hotspot.page';

describe('HotspotPage', () => {
  let component: HotspotPage;
  let fixture: ComponentFixture<HotspotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
