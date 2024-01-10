export interface product {
  productId: string;
  productName: string;
  productPrice: number;
  productCount: number;
  productDesc: string;
}


export interface products {
  products:product[]
}


export interface resultData {
  total : number
}
