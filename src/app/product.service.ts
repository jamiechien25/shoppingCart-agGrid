import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fadeInItems } from '@angular/material/menu';
import { BehaviorSubject, Observable } from 'rxjs';
import { product, products } from 'src/Interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productCart: product[] = []
  productCartNew: product[] = []
  checkoutCart:product[] = []
  Remove:any

  private dataSubject = new BehaviorSubject<any>(null);
  private DeletedataSubject = new BehaviorSubject<any>(null);
  public data$: Observable<any> = this.dataSubject.asObservable();
  public delete$: Observable<any> = this.dataSubject.asObservable();

  setCheckOutData(data: any) {
    this.dataSubject.next(data);
  }

  setDelete(deleteItem:any){
    this.DeletedataSubject.next(deleteItem)
  }


  getProduct() {
    return this._http.get<products>('http://localhost:3000/loadproduct');
  }

  setCart(item) {
    const existItem = this.productCart.find(cartItem => cartItem.productId === item.productId);
    if (existItem) {
      existItem.productCount += item.productCount;
    } else {
      this.productCart.push(item);
    }
    this.productCartNew = this.productCart.map(x=>({
      ...x,
    }))
  }


  setChangeCart(hasChangeArray:any){
    this.productCartNew = hasChangeArray
  }

  getCart() {
    return this.productCartNew
  }

  removeData(Remove: product) {
    this.productCartNew= this.productCartNew.filter(item => item !== Remove);
    this.productCart= this.productCartNew.filter(item => item !== Remove);
    this.checkoutCart = this.checkoutCart.filter(item => item !== Remove);
  }



  setCheckCart(checkout:any){
    this.checkoutCart = checkout
  }

  getCheckOutCart(){
    this.checkoutCart = this.productCartNew.map(x=>({
      ...x,
      productPrice:x.productPrice*x.productCount
    }))
    return this.checkoutCart
  }

  constructor(private _http: HttpClient) { }

}
