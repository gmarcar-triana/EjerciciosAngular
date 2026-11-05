import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleService } from '../../services/people-service';
import { Result } from '../../interfaces/peopleListResponse';
import { PeopletemComponent } from '../people-item-component/people-item-component';
import { PeopleModalComponent } from '../people-modal-component/people-modal-component';

@Component({
  imports: [PeopletemComponent],
  selector: 'app-people-list-component',
  styleUrl: './people-list-component.css',
  templateUrl: './people-list-component.html',
})
export class PeopleListComponent implements OnInit {
  peopleService = inject(PeopleService);
  private modalService = inject(NgbModal);

  peopleList = signal<Result[]>([]);
  loading = signal(true);
  error = signal(false);

  ngOnInit(): void {
    this.peopleService.getAll().subscribe({
      next: (resp) => {
        this.peopleList.set(resp.results);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }

  openPeopleModal(id: string) {
    this.peopleService.getOne(id).subscribe((resp) => {
      const modalRef = this.modalService.open(PeopleModalComponent);
      modalRef.componentInstance.peopleDetail = resp;
    });
  }
}
