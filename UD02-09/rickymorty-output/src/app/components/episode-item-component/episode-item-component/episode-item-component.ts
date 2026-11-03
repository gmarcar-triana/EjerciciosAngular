import { Component, input, output } from '@angular/core';
import { Result } from '../../../interfaces/episode-list-response';

@Component({
  imports: [],
  selector: 'app-episode-item-component',
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent {

  episode = input<Result>();

  episodeClicked = output<string>();
  id: string = '';

  getEpisodeId() {
    this.id = String(this.episode()!.id);
    return this.id;
  }

  emitEpisodeClicked() {
    const id = this.getEpisodeId();
    this.episodeClicked.emit(id);
  }

}
