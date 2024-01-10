import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { product, resultData } from 'src/Interface/product';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import "ag-grid-enterprise";
import { formatDate } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrls: ['./check-out-page.component.scss']
})
export class CheckOutPageComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private api!: GridApi;

  checkOutProduct: product[] = []
  selectedProducts: product[] = [];
  private dataSubscription: Subscription;

  resultData:resultData
  count: number = 0
  lastProductAll: product[] = []
  Date:Date = new Date()
  DateShow:string=''
  name:string=''
  email:string=''

  defaultColDef: ColDef = {
    sortable: true, filter: true, suppressSizeToFit: true
  }

  public rowSelection: 'single' | 'multiple' = 'multiple';

  columnDefs = [
    {
      headerName: '商品名稱', field: 'productName'
    },
    {
      headerName: '商品數量', field: 'productCount', editable: true,
    },
    // { headerName: '商品描述', field: 'productDesc' },
    {
      headerName: '單價', field: 'productPrice'
    },
    {
      headerName: '總和', field: 'productPrice', aggFunc: 'sum',valueParser: "Number(newValue)",valueGetter: 'data.productPrice*data.productCount',
    },



  ];

  rowData: product[] = []


  constructor(
    private productService: ProductService,
    private auth : AuthService,
    private router: Router,
    private route: ActivatedRoute) {
    this.resultData = this.router.getCurrentNavigation()?.extras.state as resultData;
  }

  ngOnInit(): void {
    this.dataSubscription = this.productService.data$.subscribe(x => {
      this.rowData = x
    })
    this.DateShow = formatDate(this.Date, 'yyy-MM-dd', 'en-US');
    this.name = this.auth.getAuthInfo().name
    this.email = this.auth.getAuthInfo().email
  }


  onGridReady = (event: GridReadyEvent) => {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe()

  }
}
