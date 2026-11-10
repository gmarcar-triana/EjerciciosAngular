import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [ReactiveFormsModule, NgbDatepickerModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  categories = ['Tecnología', 'Diseño', 'Programación', 'Novedades'];

  // Un único FormGroup que agrupa todos los FormControl
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    category: new FormControl('', [Validators.required]),
    tags: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    publishNow: new FormControl(true),
    publishDate: new FormControl<NgbDateStruct | null>({ value: null, disabled: true }),
  });

  submitted = false;

  constructor() {
    // La fecha solo es obligatoria si se programa la publicación
    const { publishNow, publishDate } = this.form.controls;
    publishNow.valueChanges.subscribe((now) => {
      if (now) {
        publishDate.reset(null);
        publishDate.disable();
        publishDate.clearValidators();
      } else {
        publishDate.enable();
        publishDate.setValidators([Validators.required]);
      }
      publishDate.updateValueAndValidity();
    });
  }

  isInvalid(name: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || this.submitted);
  }

  sendForm() {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log('Formulario inválido', {
        title: this.form.controls.title.errors,
        description: this.form.controls.description.errors,
        category: this.form.controls.category.errors,
        email: this.form.controls.email.errors,
        publishDate: this.form.controls.publishDate.errors,
      });
      return;
    }

    const value = this.form.getRawValue();
    const date = value.publishDate;
    const result = {
      ...value,
      tags: (value.tags ?? '')
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t.length > 0),
      publishDate: date
        ? `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
        : null,
    };
    console.log(result);
  }

  resetForm() {
    this.form.reset({
      title: '',
      description: '',
      category: '',
      tags: '',
      email: '',
      publishNow: true,
      publishDate: null,
    });
    this.submitted = false;
  }
}
