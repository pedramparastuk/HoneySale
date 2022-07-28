import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from "../../classes/product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  products: Product[] = [];
  shippingMethods: string[] = [];
  consistencies: string[] = [];
  varieties: string[] = [];

  public currencies = [{
    name: 'Euro',
    currency: 'EUR',
    price: 0.90 // price of euro
  }, {
    name: 'Rupees',
    currency: 'INR',
    price: 70.93 // price of inr
  }, {
    name: 'Pound',
    currency: 'GBP',
    price: 0.78 // price of euro
  }, {
    name: 'Dollar',
    currency: 'USD',
    price: 1 // price of usd
  }]

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    public productService: ProductService) {
    this.productService.cartItems.subscribe(response => this.products = response);
  }

  ngOnInit(): void {
    this.productService.shippingMethodes$.subscribe(responseItems => {
      this.shippingMethods = responseItems;
    });

    this.productService.consistencies$.subscribe(responseItems => {
      this.consistencies = responseItems;
    });

    this.productService.varieties$.subscribe(responseItems => {
      this.varieties = responseItems;
    });
  }

  get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  removeItem(product: any) {
    this.productService.removeCartItem(product);
  }

}
