import {Injectable} from '@angular/core';
import {TestData} from '../TestData/TestData';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  getUsers(): User[] {
    return TestData.users.filter(user => !user.isAuthorized);
  }

  getAuthorizedUser(): User {
    return TestData.users.filter(user => user.isAuthorized)[0];
  }

  constructor() {
  }
}
