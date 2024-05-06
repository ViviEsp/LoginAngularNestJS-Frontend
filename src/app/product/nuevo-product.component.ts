import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-nuevo-product',
  templateUrl: './nuevo-product.component.html',
  styleUrl: './nuevo-product.component.css'
})
export class NuevoProductComponent {
  name = '';
  price:number = 0;
  description = '';

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const product = new Product(this.name, this.price, this.description);
    this.productService.save(product).subscribe(
      data => {
        this.toastr.success('Producto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.backTo();
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  backTo():void{
    this.router.navigate(['/lista']);
  }
}
