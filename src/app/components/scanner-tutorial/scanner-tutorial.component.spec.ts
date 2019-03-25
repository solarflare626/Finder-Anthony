import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerTutorialPage } from './scanner-tutorial.page';

describe('ScannerTutorialPage', () => {
  let component: ScannerTutorialPage;
  let fixture: ComponentFixture<ScannerTutorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannerTutorialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerTutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
