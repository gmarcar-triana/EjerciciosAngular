import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomProgressBar } from './components/custom-progress-bar/custom-progress-bar';

@Component({
  imports: [FormsModule, CustomProgressBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('progress-bar');

  valor = 60;
  color = 'primary';
  striped = true;
  showLabel = true;
  colores = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
}
