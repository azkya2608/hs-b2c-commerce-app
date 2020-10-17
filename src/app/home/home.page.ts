import { Component, OnInit } from '@angular/core';
import { Product } from '../productclasses/Products';
import { FetchProductsService } from '../services/fetch-products.service';
import { Store } from '../storeclasses/Store';
import { FetchStoresService } from '../stores/fetch-stores.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  products: Product;
  stores: Store;

 constructor(private fetchProductsService: FetchProductsService, private fetchStoresService: FetchStoresService) { }
  ngOnInit(): void {
this.fetchProductsService.getProducts().subscribe(

  data=>{
    console.log(data);
    this.products = data;
    console.log(this.products);

    for(let product of this.products.data) {
      console.log(product.name);
      console.log(product.price);
    }

  }
);
this.fetchStoresService.getStores().subscribe(

  data=>{
    console.log(data);
    this.stores = data;
    console.log(this.stores);

    for(let store of this.stores.data) {
      console.log(store.name);
      console.log(store.address);
    }

  }
);
   
  }

}
