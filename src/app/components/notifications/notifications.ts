import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = [
    'Nouvelle conférence : Angular 21 Conference',
    'Rappel : Signals Workshop le 30/11/2027',
  ];
  showList = false;

  toggle(): void {
    this.showList = !this.showList;
  }
}
