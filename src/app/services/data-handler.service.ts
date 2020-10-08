import {Injectable} from '@angular/core';
import {TestData} from '../TestData/TestData';
import {User} from '../Model/User';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  usersSubject = new BehaviorSubject<User[]>(TestData.users);
  authorizedUser: User;

  constructor() {
    this.fillUsers();
  }

  fillUsers() {
    this.usersSubject.next(TestData.users.filter(user => !user.isAuthorized));
    // return TestData.users.filter(user => !user.isAuthorized);
  }

  getAuthorizedUser(): User {
    this.authorizedUser = TestData.users.filter(user => user.isAuthorized)[0];
    return this.authorizedUser;
  }


}
