import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BerryService } from '../../../services/berry-service';
import { BerryDetail } from '../../../interfaces/berry';

@Component({
  imports: [RouterLink],
  selector: 'app-berry-detail-component',
  styleUrl: './berry-detail-component.css',
  templateUrl: './berry-detail-component.html',
})
export class BerryDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  berryService = inject(BerryService);
  berry = signal<BerryDetail | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.berryService.getById(id).subscribe(resp => {
      this.berry.set(resp);
    });
  }
}
