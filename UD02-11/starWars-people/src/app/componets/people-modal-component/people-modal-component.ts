import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleDetailResponse } from '../../interfaces/peopleDetailResponse';

@Component({
  imports: [],
  selector: 'app-people-modal-component',
  templateUrl: './people-modal-component.html',
})
export class PeopleModalComponent {
  activeModal = inject(NgbActiveModal);

  @Input() peopleDetail: PeopleDetailResponse | undefined;
}
