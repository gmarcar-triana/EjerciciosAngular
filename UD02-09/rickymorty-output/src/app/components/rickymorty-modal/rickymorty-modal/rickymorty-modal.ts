import { Component, inject, Input } from '@angular/core';
import { RickyMortyDetailResponse } from '../../../interfaces/rickymorty-detail-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-rickymorty-modal',
  styleUrl: './rickymorty-modal.css',
  templateUrl: './rickymorty-modal.html',
})
export class RickymortyModal {

  activeModal = inject(NgbActiveModal);

  @Input() rickymortyDetail: RickyMortyDetailResponse | undefined;

}
