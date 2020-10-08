import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DataHandlerService} from './services/data-handler.service';
import {ShareService} from './services/share.service';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MenuComponent} from './views/menu/menu.component';
import {ContactsComponent} from './views/contacts/contacts.component';
import {ChatComponent} from './views/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [
    DataHandlerService,
    ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
