import { Component, inject, OnInit, signal } from '@angular/core';
import { ItemService } from '../../../services/item-service';
import { NamedResource } from '../../../interfaces/named-resource-list-response';
import { ItemItemComponent } from '../item-item-component/item-item-component';

@Component({
  imports: [ItemItemComponent],
  selector: 'app-item-list-component',
  styleUrl: './item-list-component.css',
  templateUrl: './item-list-component.html',
})
export class ItemListComponent implements OnInit {
  itemService = inject(ItemService);
  list = signal<NamedResource[]>([]);

  ngOnInit(): void {
    this.itemService.getAll().subscribe(resp => {
      this.list.set(resp.results);
    });
  }
}
