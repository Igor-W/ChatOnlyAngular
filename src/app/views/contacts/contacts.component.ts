import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../services/data-handler.service';
import {User} from '../../Model/User';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  users: User[] = [];
  selectedUser: User;

  constructor(private dataHandler: DataHandlerService) {
  }


  ngOnInit(): void {
    this.users = this.dataHandler.getUsers();
  }
  clickedContact(user: User): void{
    this.selectedUser = user;
  }

}
