import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  data$: Observable<any>
  url = './assets/data.json'
  private errorMessageSubject = new Subject<string>()
  errorMessage$ = this.errorMessageSubject.asObservable();
  constructor(private http: HttpClient) {
    this.data$ = this.http.get(this.url).pipe(catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    }))
  }

}
