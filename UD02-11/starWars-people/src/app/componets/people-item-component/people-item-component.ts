import { Component, input, output } from '@angular/core';
import { Result } from '../../interfaces/peopleListResponse';

@Component({
  imports: [],
  selector: 'app-people-item-component',
  styleUrl: './people-item-component.css',
  templateUrl: './people-item-component.html',
})
export class PeopletemComponent {
  people = input<Result>();
  peopleClicked = output<string>();

  getPeopleId(): string {
    return this.people()?.url.split('/')[5] ?? '';
  }

  emitPeopleClicked() {
    this.peopleClicked.emit(this.getPeopleId());
  }
}
