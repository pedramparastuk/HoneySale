import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../shared/classes/product';
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from '../../shared/data/slider';
import { ProductService } from '../../shared/services/product.service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    "id": 1,
    "title": "Wald blumen",
    "description": "harmonishe Komposition mit feiner Note aus Fichte und anne, sanft geerntet von Imker Gregor aus Konstanz am Bodensee. harmonishe Komposition mit feiner Note aus Fichte und anne, sanft geerntet von Imker Gregor aus Konstanz am Bodensee. harmonishe Komposition mit feiner Note aus Fichte und anne, sanft geerntet von Imker Gregor aus Konstanz am Bodensee. harmonishe Komposition mit feiner Note aus Fichte und anne, sanft geerntet von Imker Gregor aus Konstanz am Bodensee. harmonishe Komposition mit feiner Note aus Fichte und anne, sanft geerntet von Imker Gregor aus Konstanz am Bodensee.",
    "weight": 400,
    "brand": "",
    "category": "Honey",
    "price": 145,
    "specificPrice": 20,
    "sale": true,
    "new": true,
    "quantity": 5,
    "variants": [{
      "variant_id": 101,
      "id": 1,
      "image_id": 111
    },
    {
      "variant_id": 102,
      "id": 1,
      "image_id": 112
    },
    {
      "variant_id": 103,
      "id": 1,
      "image_id": 113
    },
    {
      "variant_id": 104,
      "id": 1,
      "image_id": 111
    },
    {
      "variant_id": 105,
      "id": 1,
      "image_id": 112
    },
    {
      "variant_id": 106,
      "id": 1,
      "image_id": 113
    },
    {
      "variant_id": 107,
      "id": 1,
      "image_id": 111
    }
    ],
    "images": [
      {
        "image_id": 111,
        "id": 1,
        "alt": "flower",
        "src": "assets/images/product/flower/1.png",
        "variant_id": [
          101,
          104
        ]
      },
      {
        "image_id": 112,
        "id": 1,
        "alt": "flower",
        "src": "assets/images/product/flower/2.png",
        "variant_id": [
          102,
          105
        ]
      },
      {
        "image_id": 113,
        "id": 1,
        "alt": "flower",
        "src": "assets/images/product/flower/3.png",
        "variant_id": [
          103,
          106
        ]
      },
      {
        "image_id": 113,
        "id": 1,
        "alt": "flower",
        "src": "assets/images/product/flower/4.png",
        "variant_id": [
          103,
          106
        ]
      },
      {
        "image_id": 113,
        "id": 1,
        "alt": "flower",
        "src": "assets/images/product/flower/5.png",
        "variant_id": [
          103,
          106
        ]
      },
      {
        "image_id": 113,
        "id": 1,
        "alt": "flower",
        "src": "assets/images/product/flower/6.png",
        "variant_id": [
          103,
          106
        ]
      },
      {
        "image_id": 113,
        "id": 1,
        "alt": "flower",
        "src": "assets/images/product/flower/7.png",
        "variant_id": [
          103,
          106
        ]
      },
      {
        "image_id": 113,
        "id": 1,
        "alt": "flower",
        "src": "assets/images/product/flower/8.png",
        "variant_id": [
          103,
          106
        ]
      },
      {
        "image_id": 113,
        "id": 1,
        "alt": "flower",
        "src": "assets/images/product/flower/9.png",
        "variant_id": [
          103,
          106
        ]
      },
      {
        "image_id": 113,
        "id": 1,
        "alt": "flower",
        "src": "assets/images/product/flower/10.png",
        "variant_id": [
          103,
          106
        ]
      }
    ]
  };
  counter: number = 1;
  activeSlide: any = 0;
  selectedSize: any;
  weightMeasurement: string = 'g';
  shippingMethods: string[] = ['Selbstabholung', 'Versand'];
  consistencies: string[] = ['Natürlich', 'Waldblume', 'Lokales'];
  varieties: string[] = ['Wald blüten', 'Wald blume', 'Frühtracht', 'sommerbluten', 'sommertracht'];

  public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
  public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;

  constructor(private route: ActivatedRoute, private router: Router,
    public productService: ProductService, private toastrService: ToastrService) {
  }

  ngOnInit(): void { }

  onVarietiesFilter(items: string[]) {
    this.productService.varieties$.next(items);
  }

  onShippingMethodsFilter(items: string[]) {
    this.productService.shippingMethodes$.next(items);
  }

  onConsistenciesFilter(items: string[]) {
    this.productService.consistencies$.next(items);
  }

  // Increament
  increment() {
    this.counter++;
  }

  // Decrement
  decrement() {
    if (this.counter > 1) this.counter--;
  }

  // Add to cart
  async addToCart(product: any) {
    product.quantity = this.counter || 1;
    const status = await this.productService.addToCart(product);
    if (status)
      this.router.navigate(['/shop/cart']);
  }

  // Buy Now
  async buyNow(product: any) {
    product.quantity = this.counter || 1;
    const status = await this.productService.addToCart(product);
    if (status)
      this.toastrService.success('Product is ordered by subscription.');
  }

  // Add to Wishlist
  addToWishlist(product: any) {
    this.productService.addToWishlist(product);
  }

}
