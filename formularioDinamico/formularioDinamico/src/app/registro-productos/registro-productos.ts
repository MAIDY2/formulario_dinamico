import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registro-productos',
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-productos.html',
  styleUrl: './registro-productos.css',
})
export class RegistroProductos {
  nombreProducto: string = '';
  categoriaProducto: string = '';
  precioProducto: number = 0;
  cantidadProducto: number = 0;
  productos: any[] = [];

  registrarProductos(){
   const nuevoProducto = {
    nombre: this.nombreProducto,
    categoria: this.categoriaProducto,
    precio: this.precioProducto,
    cantidad: this.cantidadProducto
  }
  
  this.productos.push(nuevoProducto);
}
}
