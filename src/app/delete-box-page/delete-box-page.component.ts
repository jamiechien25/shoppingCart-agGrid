import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { product } from 'src/Interface/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-box-page',
  templateUrl: './delete-box-page.component.html',
  styleUrls: ['./delete-box-page.component.scss']
})
export class DeleteBoxPageComponent implements OnInit {

  private _selectedProducts: product[] = [];

  @Output() pushToCart = new EventEmitter();
  @Input()
  set selectedProducts(value: product[]) {
      this._selectedProducts = value;
  }

  get selectedProducts(): product[] {
    return this._selectedProducts;
  }

  selectPriceArray:any[]=[]
  sumArray:number[]=[]
  totalPrice:number = 0


  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
   if(changes.selectedProducts){
    this.calculateTotal()
   }
  }

  calculateTotal() {
    this.selectedProducts.forEach(x=> this.sumArray.push(x.productPrice*x.productCount))
    this.totalPrice = this.sumArray.reduce((sum, price) => sum + price, 0)
  }

  callDad() {
    this.pushToCart.emit(this.totalPrice);
    alert("事件傳送到父層了，總共價格" + this.totalPrice);
  }




}
