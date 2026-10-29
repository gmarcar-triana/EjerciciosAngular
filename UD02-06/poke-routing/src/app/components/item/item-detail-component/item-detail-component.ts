import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemService } from '../../../services/item-service';
import { ItemDetail } from '../../../interfaces/item';

@Component({
  imports: [RouterLink],
  selector: 'app-item-detail-component',
  styleUrl: './item-detail-component.css',
  templateUrl: './item-detail-component.html',
})
export class ItemDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  itemService = inject(ItemService);
  item = signal<ItemDetail | null>(null);

  englishEffect = computed(() => {
    const entry = this.item()?.effect_entries.find(e => e.language.name === 'en');
    return entry?.short_effect ?? null;
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.itemService.getById(id).subscribe(resp => {
      this.item.set(resp);
    });
  }
}
