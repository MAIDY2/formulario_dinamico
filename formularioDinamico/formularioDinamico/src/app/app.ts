import { Component, signal } from '@angular/core';
import {RegistroEstudiantes} from './registro-estudiantes/registro-estudiantes';
import {RegistroCursos} from './registro-cursos/registro-cursos';
import {RegistroProductos} from './registro-productos/registro-productos';

@Component({
  selector: 'app-root',
  imports: [RegistroEstudiantes, RegistroCursos, RegistroProductos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formularioDinamico');
}
