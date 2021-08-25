import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employeeList = [];

  constructor() {
    this.employeeList.push({
      idEmployee: 333, nameEmployee: 'Dung van Binh', idPosition: 2,
      idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
      salaryEmployee: 333222, phoneEmployee: '0935123123',
      emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-123'
    });
    this.employeeList.push({
      idEmployee: 345, nameEmployee: 'Dung van Binh', idPosition: 2,
      idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
      salaryEmployee: 333222, phoneEmployee: '0935123123',
      emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-123'
    });
    this.employeeList.push({
      idEmployee: 456, nameEmployee: 'Dung van Binh', idPosition: 2,
      idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
      salaryEmployee: 333222, phoneEmployee: '0935123123',
      emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-123'
    });
    this.employeeList.push({
      idEmployee: 231, nameEmployee: 'Dung van Binh', idPosition: 2,
      idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
      salaryEmployee: 333222, phoneEmployee: '0935123123',
      emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-123'
    });
  }

  ngOnInit(): void {
  }

}
