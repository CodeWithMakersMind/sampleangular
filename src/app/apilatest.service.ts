import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApilatestService {
  constructor(private http: HttpClient) {}

  postregistration(data: any) {
    return this.http.post(
      `http://localhost/admin/api/registerpostApi.php`,
      data
    );
  }

  postlogin(data: any) {
    return this.http.post(`http://localhost/admin/api/loginApi.php`, data);
  }
}
