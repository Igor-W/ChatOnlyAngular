import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './views/menu/menu.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { ChatComponent } from './views/chat/chat.component';
import { AboutComponent } from './views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactsComponent,
    ChatComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
