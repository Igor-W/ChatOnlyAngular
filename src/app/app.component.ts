import { Component, OnInit } from '@angular/core';
import {TestData} from './TestData/TestData';
import {User} from './Model/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ChatDEMO';
  testData: TestData = new TestData();

}
