import {Injectable} from '@angular/core';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employeeList: Employee[] = [{
    idEmployee: 333, nameEmployee: 'Dung van Binh', idPosition: 2,
    idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
    salaryEmployee: 333222, phoneEmployee: '0935123123',
    emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-123'
  }, {
    idEmployee: 333, nameEmployee: 'Dung van Binh', idPosition: 2,
    idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
    salaryEmployee: 333222, phoneEmployee: '0935123123',
    emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-123'
  }, {
    idEmployee: 333, nameEmployee: 'Dung van Binh', idPosition: 2,
    idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
    salaryEmployee: 333222, phoneEmployee: '0935123123',
    emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-123'
  }, {
    idEmployee: 333, nameEmployee: 'Dung van Binh', idPosition: 2,
    idEducation: 1, idDivision: 2, dateOfBirthEmployee: '2000-11-11', idCardEmployee: '123321222',
    salaryEmployee: 333222, phoneEmployee: '0935123123',
    emailEmployee: 'kkk@gmail.com', addressEmployee: 'Da Lat', codeEmployee: 'NV-123'
  }];

  constructor() {
  }
}
