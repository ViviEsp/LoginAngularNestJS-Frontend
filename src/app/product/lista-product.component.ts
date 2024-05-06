import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-lista-product',
  templateUrl: './lista-product.component.html',
  styleUrl: './lista-product.component.css'
})
export class ListaProductComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.cargarProducts();
  }

  cargarProducts(): void {
    this.productService.lista().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    console.log(`borrar el ${id}`);
  }
}
