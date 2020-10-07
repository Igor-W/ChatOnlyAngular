import {Injectable} from '@angular/core';
import {TestData} from '../TestData/TestData';
import {User} from '../Model/User';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  usersSubject = new BehaviorSubject<User[]>(TestData.users);

  getUsers(): User[] {
    return TestData.users.filter(user => !user.isAuthorized);
  }

  getAuthorizedUser(): User {
    return TestData.users.filter(user => user.isAuthorized)[0];
  }

  // fillMainContact(user: User) {
  //   const users = TestData.users.filter(user => )
  // }

  constructor() {
  }
}
