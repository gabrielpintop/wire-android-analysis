import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getAppData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(environment.basePath + 'analysis/wire/info', this.options)
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          err => {
            console.log(err);
            return reject(err.error.error);
          }
        );
    });
  }
}
