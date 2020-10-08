import {Component, OnInit} from '@angular/core';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {ShareService} from '../../services/share.service';
import {User} from '../../Model/User';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  mainUser: User = null;

  constructor(private share: ShareService) {
    this.share.userClick.subscribe(usr => this.mainUser = usr);
  }


  ngOnInit(): void {

  }


}
