import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'IronMan';
  edad: number = 45;

  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre(){
    return this.nombre = 'Spiderman'
  }

  cambiarEdad(){
    return this.edad = 30
  }

}
