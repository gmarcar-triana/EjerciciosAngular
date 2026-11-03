import { Component, signal } from '@angular/core';
import { RickymortyListComponent } from './components/rickymorty-list-component/rickymorty-list-component/rickymorty-list-component';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component/episode-list-component';

@Component({
  imports: [RickymortyListComponent, EpisodeListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('rickymorty-output');
  view = signal<'characters' | 'episodes'>('characters');
}
