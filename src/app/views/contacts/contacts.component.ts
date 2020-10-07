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


  constructor(private dataHandler: DataHandlerService) {
  }


  ngOnInit(): void {
    this.users = this.dataHandler.getUsers();
  }


  clickedContact(): void {
    const contacts = document.querySelectorAll('.contact_card');
    contacts.forEach((contact) => {
      contact.addEventListener('click', () => {
        contacts.forEach((item) => {
          const imgItem = item.lastElementChild
            .firstElementChild;
          const nameItem = item.lastElementChild
            .getElementsByClassName('contact_card_text')[0]
            .firstElementChild;
          const oldMsgItem = item.lastElementChild
            .getElementsByClassName('contact_card_text')[0]
            .lastElementChild;
          const indicatorItem = item.lastElementChild
            .lastElementChild;
          item.classList.remove('active');
          imgItem.classList.remove('active');
          nameItem.classList.remove('active');
          oldMsgItem.classList.remove('active');
          indicatorItem.classList.remove('active');
        });
        const img = contact.lastElementChild
          .firstElementChild;
        const name = contact.lastElementChild
          .getElementsByClassName('contact_card_text')[0]
          .firstElementChild;
        const oldMsg = contact.lastElementChild
          .getElementsByClassName('contact_card_text')[0]
          .lastElementChild;
        const indicator = contact.lastElementChild
          .lastElementChild;
        contact.classList.add('active');
        img.classList.add('active');
        name.classList.add('active');
        oldMsg.classList.add('active');
        indicator.classList.add('active');
      });
    });
  }

}
