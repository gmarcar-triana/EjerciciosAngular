import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
pantalla: string = '0';
  operacion: string = '';
  numero1: number = 0;

  // Si hay un 0 inicial, lo reemplaza; si no, concatena
  agregarNumero(num: string): void {
    if (this.pantalla === '0') {
      this.pantalla = num;
    } else {
      this.pantalla += num;
    }
  }

  // Guarda el primer número y la operación (+ o -)
  setOperacion(op: string): void {
    this.numero1 = parseFloat(this.pantalla);
    this.operacion = op;
    this.pantalla = '0';
  }

  // Realiza el cálculo directo
  calcular(): void {
    const numero2 = parseFloat(this.pantalla);

    if (this.operacion === '+') {
      this.pantalla = (this.numero1 + numero2).toString();
    } else if (this.operacion === '-') {
      this.pantalla = (this.numero1 - numero2).toString();
    }

    this.operacion = '';
  }

  // Borra todo
  limpiar(): void {
    this.pantalla = '0';
    this.operacion = '';
    this.numero1 = 0;
  }
}