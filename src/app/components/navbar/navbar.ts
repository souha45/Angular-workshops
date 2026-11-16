import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  listItems=[
    {name: 'Accueil', link:'/'},
    {name: 'Profil', link:'/'},
    {name: 'Conferences', link:'/'},
    {name: 'Friends', link:'/'},
    {name: 'Notifications', link:'/'},
    {name: 'Admin', link:'/'},
  ]
}
