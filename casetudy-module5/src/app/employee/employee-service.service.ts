import {Injectable} from '@angular/core';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employeeList: Employee[] = [{
    idEmployee: 3122, nameEmployee: 'Dung van Binh', idPosition: 2,
    idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
    salaryEmployee: 333222, phoneEmployee: '0901123123',
    emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-1222'
  }, {
    idEmployee: 512, nameEmployee: 'Dung van Binh', idPosition: 2,
    idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
    salaryEmployee: 333222, phoneEmployee: '0901123123',
    emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-1222'
  }, {
    idEmployee: 222, nameEmployee: 'Dung van Binh', idPosition: 2,
    idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
    salaryEmployee: 333222, phoneEmployee: '0901123123',
    emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-1222'
  }, {
    idEmployee: 5531, nameEmployee: 'Dung van Binh', idPosition: 2,
    idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
    salaryEmployee: 333222, phoneEmployee: '0901123123',
    emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-1222'
  }];
  message: string;

  constructor() {
  }
  findById(id: number) {
    return this.employeeList.find(employee => employee.idEmployee === id);
    console.log('id in service: ' + id);
  }

  updateEmployee(id: number, employee: any) {
    for (let i = 0; i < this.employeeList.length; i++) {
      if (this.employeeList[i].idEmployee === id) {
        this.employeeList[i] = employee;
      }
    }
  }
}
