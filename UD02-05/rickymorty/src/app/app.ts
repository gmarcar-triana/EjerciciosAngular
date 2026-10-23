import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterListComponent } from './components/character-list-component/character-list-component';

@Component({
  imports: [RouterOutlet, CharacterListComponent, NgbModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('rickymorty');
}
