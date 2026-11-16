import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {

  FriendsList=[
    {name: 'Amin'},
    {name: 'sarra'},
    {name: 'Ahmed'},
  ]
}
