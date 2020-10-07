import { Component, OnInit } from '@angular/core';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  constructor() { }

  ngOnInit(): void {
  }

}
