import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'jYNA5xUBOyCZUoXoQYyxgtRESXHtoX6ImimUo5UW',
  databaseURL: 'https://chat-list-c2972-default-rtdb.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loginangular';
  constructor() {
    firebase.default.initializeApp(config);
  }
}
