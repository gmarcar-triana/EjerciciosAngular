import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RickymortyListComponent } from './components/rickymorty-list-component/rickymorty-list-component/rickymorty-list-component';

@Component({
  imports: [RouterOutlet, RickymortyListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('rickymorty-output');
}
