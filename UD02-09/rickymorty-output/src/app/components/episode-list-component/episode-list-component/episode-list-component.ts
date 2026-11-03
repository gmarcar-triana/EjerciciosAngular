import { Component, inject, signal } from '@angular/core';
import { EpisodeService } from '../../../services/episode-service';
import { Result } from '../../../interfaces/episode-list-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeModal } from '../../episode-modal/episode-modal/episode-modal';
import { EpisodeItemComponent } from '../../episode-item-component/episode-item-component/episode-item-component';


@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent {

  episodeService = inject(EpisodeService);
  episodeList = signal<Result[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.episodeService.getAll().subscribe(resp => {
      this.episodeList.set(resp.results);
    });
  }

  openEpisodeModal(id: string) {
    this.episodeService.getOne(id).subscribe(resp => {

      const modalRef = this.modalService.open(EpisodeModal);
      modalRef.componentInstance.episodeDetail = resp;
    });

  }

}
