
import { ProductService } from './../product.service';
import { Component, OnInit , Inject } from '@angular/core';
import { product } from 'src/Interface/product';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product: product[]


  constructor(
    private productService: ProductService,
    public dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(x => {
      this.product = x.products
    })
  }



  addcart(item: product) {
    this.productService.setCart(item)

  }

  openDetail(item:any){
    this.dialog.open(ProductDetailComponent, {
      data: {
        item: item,
      }
    });
  }
  }






