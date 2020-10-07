import { Component, OnInit } from '@angular/core';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {DataHandlerService} from '../../services/data-handler.service';
import {User} from '../../Model/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faUserTie = faUserTie;
  faCommentAlt = faCommentAlt;
  faUsers = faUsers;
  faSignOutAlt = faSignOutAlt;
  authorizedUser: User;

  constructor( private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.authorizedUser = this.dataHandler.getAuthorizedUser();
  }

}
