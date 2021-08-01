import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];

  constructor( private employeeservice: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployee();
   /**  this.employees=[{
      "id":1,
      "fistName": "sanjeet",
      "lastName":"tiwari",
      "emailId":"mns@gmail.com"
    }]
    */
  }
 private getEmployee(){
   console.log("**********");
   this.employeeservice.getEmployeeList().subscribe (data => {
    console.log("before" + data);
     this.employees=data;
     console.log("after" + data);
   })
 }
 employeeDetials(id: Number){
  this.router.navigate(['view-employee',id]);
 }
 updateEmployee(id: Number){
  this.router.navigate(['update-employee',id]);
}
deleteEmployee(id:number){
  this.employeeservice.deleteEmployee(id).subscribe(data =>{
    console.log(data);
    this.getEmployee();

  } )
}
}
