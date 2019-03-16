import { TestBed } from '@angular/core/testing';

import { WifiScannerService } from './wifi-scanner.service';

describe('WifiScannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WifiScannerService = TestBed.get(WifiScannerService);
    expect(service).toBeTruthy();
  });
});
