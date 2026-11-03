import { Component, inject, Input } from '@angular/core';
import { EpisodeItemResponse } from '../../../interfaces/episode-detail-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-episode-modal',
  styleUrl: './episode-modal.css',
  templateUrl: './episode-modal.html',
})
export class EpisodeModal {

  activeModal = inject(NgbActiveModal);

  @Input() episodeDetail: EpisodeItemResponse | undefined;

}
