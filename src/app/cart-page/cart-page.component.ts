import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColDef, RowSelectedEvent } from 'ag-grid-community';
import { product, resultData } from 'src/Interface/product';
import { ProductService } from '../product.service';
import { BtnCellRendererComponent } from '../ BtnCellRenderer/ BtnCellRenderer.component';
import { UpdownRendererComponent } from '../updown-renderer/updown-renderer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {



  selectedProducts: product[] = [];
  private dataSubscription: Subscription;
  count: number = 0
  orginPrice: number = 0
  orginProduct: product[] = []
  lastProductAll: product[] = []

  rxjsData:product[]=[]
  total:number=0


  defaultColDef: ColDef = {
    sortable: true, filter: true, suppressSizeToFit: true
  }

  public rowSelection: 'single' | 'multiple' = 'multiple';

  columnDefs = [
    {
      headerName: 'productName', field: 'productName', headerCheckboxSelection: true,
      checkboxSelection: true,
    },
    { headerName: 'productId', field: 'productId' },
    {
      field: 'productCount', editable: true, cellRendererFramework: UpdownRendererComponent,
      cellRendererParams: {}
    },
    { headerName: 'productDesc', field: 'productDesc' },
    {
      headerName: 'productPrice', field: 'productPrice',
      valueGetter: 'data.productPrice',
      editable: false,
    },
    {
      field: '', cellRendererFramework: BtnCellRendererComponent,
      cellRendererParams: {}
    },

  ];

  rowData: product[] = []

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }



  onRowSelected(event: RowSelectedEvent) {
    this.getRowDaraForSelect(event.api.getSelectedRows())
    this.selectedProducts = event.api.getSelectedRows()
    this.productService.setCheckOutData(event.api.getSelectedRows())
  }




  onCellValueChanged($event) {
    this.lastProductAll = this.productService.getCart().map(x => ({
      ...x,
      productCount: x.productId === $event.data.productId ? $event.data.productCount : x.productCount,
      productPrice: x.productId === $event.data.productId ? $event.data.productPrice * $event.data.productCount : x.productPrice
    }))
    this.productService.setChangeCart(this.lastProductAll)
  }

  ngOnInit(): void {
    this.rowData = this.productService.getCart()

    //rxjsData
    this.dataSubscription = this.productService.data$.subscribe(x=>{
      this.rxjsData = x
    })
  }

  goCheckOut() {
    this.productService.setCheckCart(this.lastProductAll)
    const data:resultData ={
      total:this.total
    }
    this.router.navigateByUrl(this.router.createUrlTree(['../checkout'], { relativeTo: this.route }), { state:  data });
  }



  getChild(price: number) {
    this.total = price;
  }

  getRowDaraForSelect(event: product[]) {
    console.log(event)
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe()
  }
}


