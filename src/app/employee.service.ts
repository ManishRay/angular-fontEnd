import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'

})
export class EmployeeService {

  private baseUrl="http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { 
   
  }

    getEmployeeList(): Observable<Employee[]>{
      return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
    }
  
}
