import { Component, inject, signal } from '@angular/core';
import { RickymortyService } from '../../../services/rickymorty-service';
import { Character } from '../../../interfaces/rickymorty-list-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RickymortyModal } from '../../rickymorty-modal/rickymorty-modal/rickymorty-modal';
import { RickymortyItemComponent } from '../../rickymorty-item-component/rickymorty-item-component/rickymorty-item-component';


@Component({
  imports: [RickymortyItemComponent],
  selector: 'app-rickymorty-list-component',
  styleUrl: './rickymorty-list-component.css',
  templateUrl: './rickymorty-list-component.html',
})
export class RickymortyListComponent {

  rickymortyService = inject(RickymortyService);
  rickymortyList = signal<Character[]>([]);
  private modalService = inject(NgbModal);

    ngOnInit(): void {
   this.rickymortyService.getAll().subscribe(resp => {
      this.rickymortyList.set(resp.results);
    });
  }

  openCharacterModal(id: string) {
    this.rickymortyService.getOne(id).subscribe(resp => {

          const modalRef = this.modalService.open(RickymortyModal);
		      modalRef.componentInstance.rickymortyDetail = resp;
    });

  }



}
