import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [ReactiveFormsModule, NgbDatepickerModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  categories = ['Tecnología', 'Diseño', 'Programación', 'Novedades'];

  // Un FormControl independiente por campo (sin FormGroup)
  title = new FormControl('', [Validators.required, Validators.minLength(3)]);
  description = new FormControl('', [Validators.required, Validators.minLength(10)]);
  category = new FormControl('', [Validators.required]);
  tags = new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  publishNow = new FormControl(true);
  publishDate = new FormControl<NgbDateStruct | null>(null);

  submitted = false;
  result: unknown = null;

  constructor() {
    // La fecha solo es obligatoria si se programa la publicación
    this.publishDate.disable();
    this.publishNow.valueChanges.subscribe((now) => {
      if (now) {
        this.publishDate.reset(null);
        this.publishDate.disable();
        this.publishDate.clearValidators();
      } else {
        this.publishDate.enable();
        this.publishDate.setValidators([Validators.required]);
      }
      this.publishDate.updateValueAndValidity();
    });
  }

  get controls() {
    return [this.title, this.description, this.category, this.tags, this.email, this.publishNow, this.publishDate];
  }

  isInvalid(control: FormControl): boolean {
    return control.invalid && (control.touched || this.submitted);
  }

  sendForm() {
    this.submitted = true;
    if (this.controls.some((c) => c.invalid)) {
      this.controls.forEach((c) => c.markAsTouched());
      this.result = null;
      console.log('Formulario inválido', {
        title: this.title.errors,
        description: this.description.errors,
        category: this.category.errors,
        email: this.email.errors,
        publishDate: this.publishDate.errors,
      });
      return;
    }

    const date = this.publishDate.value;
    this.result = {
      title: this.title.value,
      description: this.description.value,
      category: this.category.value,
      tags: (this.tags.value ?? '')
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t.length > 0),
      email: this.email.value,
      publishNow: this.publishNow.value,
      publishDate: date
        ? `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
        : null,
    };
    console.log(this.result);
  }

  resetForm() {
    this.title.reset('');
    this.description.reset('');
    this.category.reset('');
    this.tags.reset('');
    this.email.reset('');
    this.publishDate.reset(null);
    this.publishNow.reset(true);
    this.submitted = false;
    this.result = null;
  }
}
