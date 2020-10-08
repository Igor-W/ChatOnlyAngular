import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() {
  }

  clickedUser: User = null;
  userClick: EventEmitter<User> = new EventEmitter();

  public clickOnUser() {
    this.userClick.emit(this.clickedUser);
  }
}
