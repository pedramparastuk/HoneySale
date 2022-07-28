import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/classes/product';
import { ProductService } from 'src/app/shared/services/product.service';
// import { Product } from '../../../../shared/classes/product';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.scss']
})
export class ProductOptionsComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() options: string[] = [];
  @Input() title: string;

  @Output() optionsFilter: EventEmitter<any> = new EventEmitter<any>();

  filteredOptions: string[] = [];

  constructor() {
  }

  ngOnInit(): void { }

  get filterbyBrand() {
    const uniqueBrands = [];
    this.products.filter((product) => {
      if (product.brand) {
        const index = uniqueBrands.indexOf(product.brand)
        if (index === -1) uniqueBrands.push(product.brand)
      }
    })
    return uniqueBrands
  }

  appliedFilter(event) {

    let index = this.options.indexOf(event.target.value);  // checked and unchecked value
    if (event.target.checked)   
      this.filteredOptions.push(event.target.value); // push in array cheked value
    else 
      this.filteredOptions.splice(index,1);  // removed in array unchecked value

    this.optionsFilter.emit(this.filteredOptions);
  }

  // check if the item are selected
  checked(item) {
    if (this.options.indexOf(item) != -1) {
      return true;
    }
  }

}
