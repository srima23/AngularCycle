import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  private apiUrl = 'http://localhost:8080/api';  // Update with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  borrowCycle(id: number, count: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/borrow`;
    return this.http.post(url, { count });
  }
}
