import { Component, NgZone } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-lista-cats-component',
  templateUrl: './lista-cats-component.component.html',
  styleUrls: ['./lista-cats-component.component.css']
})
export class ListaCatsComponentComponent {
  constructor(private productService: ProductService,
    private ngZone : NgZone){

  }

  listProducts: any = []

  ngOnInit(){
    this.loadProducts()
  }

  loadProducts(){
    this.productService.getProducts().subscribe((data: {}) =>{
      this.listProducts = data
    })
  }

  
}
