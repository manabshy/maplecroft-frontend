import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';

import { DataAccessService } from './data-access.service';

describe('DataAccessService', () => {
  let service: DataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(DataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('get the data from the service', () => {
    const data$ = new Observable(of['1'])
    service.data$ = data$
    expect(service.data$).toBeInstanceOf(Observable)
  });


});
