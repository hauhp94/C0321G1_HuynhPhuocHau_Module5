import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employeeList: Employee[];

  constructor(private employeeServiceService: EmployeeServiceService) {
   this.employeeList = employeeServiceService.employeeList;
  }

  ngOnInit(): void {
  }

}
