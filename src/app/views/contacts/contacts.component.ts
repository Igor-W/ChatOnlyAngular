import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../services/data-handler.service';
import {User} from '../../Model/User';
import {ShareService} from '../../services/share.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  users: User[] = [];
  selectedUser: User;

  constructor(private dataHandler: DataHandlerService, private share: ShareService) {
  }


  ngOnInit(): void {
     this.dataHandler.usersSubject.subscribe(users => this.users = users);
  }

  clickedContact(user: User): void {
    this.selectedUser = user;
    this.share.clickedUser = this.selectedUser;
    this.share.clickOnUser();
  }


}
