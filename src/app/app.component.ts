import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./services/products/products.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  products: Array<Object>;

  constructor(private _p: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this._p.get().subscribe(data => {
      this.products = data;
    });
  }
}