import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Notifications } from './components/notifications/notifications';
import { Friends } from './components/friends/friends';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Profil } from './components/profil/profil';


@Component({
  selector: 'app-root',
  imports: [Footer,Header,Friends,Navbar,Notifications,Profil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
