import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-cursos',
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-cursos.html',
  styleUrl: './registro-cursos.css',
})
export class RegistroCursos {
  nombreCurso: string = '';
  instructor: string = '';
  duracion: number = 0;
  jornada: string = '';
  cursos: any[] = [];

  registrarCursos(){
   const nuevoCurso = {
    nombre: this.nombreCurso,
    instructor: this.instructor,
    duracion: this.duracion,
    jornada: this.jornada
  }
  
  this.cursos.push(nuevoCurso);
}
}
