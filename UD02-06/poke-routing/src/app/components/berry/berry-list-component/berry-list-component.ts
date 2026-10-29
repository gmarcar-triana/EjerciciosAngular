import { Component, inject, OnInit, signal } from '@angular/core';
import { BerryService } from '../../../services/berry-service';
import { NamedResource } from '../../../interfaces/named-resource-list-response';
import { BerryItemComponent } from '../berry-item-component/berry-item-component';

@Component({
  imports: [BerryItemComponent],
  selector: 'app-berry-list-component',
  styleUrl: './berry-list-component.css',
  templateUrl: './berry-list-component.html',
})
export class BerryListComponent implements OnInit {
  berryService = inject(BerryService);
  list = signal<NamedResource[]>([]);

  ngOnInit(): void {
    this.berryService.getAll().subscribe(resp => {
      this.list.set(resp.results);
    });
  }
}
