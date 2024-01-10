import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { product } from 'src/Interface/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  dataInto: any
  detailItem:any

  constructor(
    @Inject(MAT_DIALOG_DATA)public data: any,
    private productService: ProductService,
   ) {
    this.dataInto = data
  }

  ngOnInit(): void {
    this.detailItem = this.dataInto.item
  }

  addcart(item: product) {
    this.productService.setCart(item)
  }

}
