import { Component, signal } from '@angular/core';
import { PeopleListComponent } from './componets/people-list-component/people-list-component';

@Component({
  imports: [PeopleListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('starWars-people');
}
