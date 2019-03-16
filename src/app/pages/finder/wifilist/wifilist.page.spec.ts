import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifilistPage } from './wifilist.page';

describe('WifilistPage', () => {
  let component: WifilistPage;
  let fixture: ComponentFixture<WifilistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifilistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifilistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
