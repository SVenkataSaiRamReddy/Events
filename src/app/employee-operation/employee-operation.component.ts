import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-operation',
  templateUrl: './employee-operation.component.html',
  styleUrls: ['./employee-operation.component.css']
})
export class EmployeeOperationComponent implements OnInit {
  employee:any;
  empRef= new FormGroup({
    id:new FormControl(),
    fname:new FormControl(),
    lname:new FormControl(),
    email:new FormControl()
  });

  employees:Array<Employee>=[]
  constructor(public router:Router,public ps:EmployeeService) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("employeeInfo");
    if(obj != null){
        this.employee= JSON.parse(obj);
    }
  }

  ViewAll(){
      this.router.navigate(["employee"]);
  }

  deleteEmployee(id:any){
      this.ps.delete(id).subscribe({
        next:(result:any)=>console.log(result),
        error:(error:any)=>console.log(error),
        complete:()=>console.log("completed")
      })
  }

    updateEmployee(){
    let emp=this.empRef.value
    this.ps.update(emp).subscribe({
      next:(data:any)=>console.log(data),
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.ps.storeEmployeeData(emp)
  }
}