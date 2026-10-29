import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar',
  styleUrl: './custom-progress-bar.css',
  templateUrl: './custom-progress-bar.html',
})
export class CustomProgressBar {
  value = input<number>(0);
  color = input<string>('primary');
  striped = input<boolean>(false);
  showLabel = input<boolean>(false);
  height = input<number>(20);

  percentage = computed(() => Math.min(100, Math.max(0, this.value())));
}
