import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'  // provider attribute in app.module.ts service class available in root level. 
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  // loadProductData(){
  //   this.http.get("http://localhost:3000/products").subscribe({
  //     next:(data:any)=>console.log(data),
  //      error:(error:any)=>console.log(error),
  //     complete:()=>console.log("Completed")
  //   })
  // }

  // we return Observable with array of product ie typecasting 
  loadEmployeeData():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:3000/employees");
  }

  // in post method 1st parameter url and 2nd parameter data in json format. 
  storeEmployeeData(employee:any):Observable<Employee>{
    return this.http.post<Employee>("http://localhost:3000/employees",employee);
  }

  // it is consider as path param 
  findEmployeeById(id:any):Observable<Employee>{
    return this.http.get<Employee>("http://localhost:3000/employees/"+id);
  }

  // it will delete using path param 
  delete(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:3000/employees/"+id);
  }

   // in post method 1st parameter url and 2nd parameter data in json format. 
   update(employee:any):Observable<Employee>{
    return this.http.put<Employee>("http://localhost:3000/employees",employee);
  }

  
}