import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiListTutorialPage } from './wifi-list-tutorial.page';

describe('WifiListTutorialPage', () => {
  let component: WifiListTutorialPage;
  let fixture: ComponentFixture<WifiListTutorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiListTutorialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiListTutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
