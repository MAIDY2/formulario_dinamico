import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-estudiantes',
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-estudiantes.html',
  styleUrl: './registro-estudiantes.css',
})
export class RegistroEstudiantes {
  nombreEstudiante: string = '';
  apellidoEstudiante: string = '';
  edadEstudiante: number = 0;
  programaEstudiante: string = '';
  estudiantes: any[] = [];

  registrarEstudiante(){
   const nuevoEstudiante = {
    nombre: this.nombreEstudiante,
    apellido: this.apellidoEstudiante,
    edad: this.edadEstudiante,
    programa: this.programaEstudiante 
  }
  
  this.estudiantes.push(nuevoEstudiante);
}
}
