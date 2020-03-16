import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders  } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  post<T>(url: string, body: any = {}) {
    
    return this.http.post(this.fullUrl()+url, body).pipe(
      // map((response) => {
        // if (response.status === 401) {
        //   this.redirect();
        // }
      // }),
      catchError((err) => throwError(err))
    )as Observable<T>;
  }

  fullUrl() {
    return environment.apiUrl+environment.prefix
  }
}
