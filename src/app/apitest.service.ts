import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApitestService {

  constructor(private http: HttpClient) { }

  getCourses() : Observable<any[]>{
    return this.http.get<any[]>(
      `http://localhost/admin/api/coursesApi.php`
      ) ;
  }



}
