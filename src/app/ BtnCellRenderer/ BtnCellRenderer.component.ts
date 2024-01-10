import { CommonModule } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ProductService } from '../product.service';

@Component({
  selector: 'app--btn-cell-renderer',
  templateUrl: './ BtnCellRenderer.component.html',
  styleUrls: ['./ BtnCellRenderer.component.scss'],
})
export class BtnCellRendererComponent implements OnInit,ICellRendererAngularComp {
  params:any

  constructor(private productService : ProductService){

  }

  refresh(params:ICellRendererParams):boolean{
    return true
  }



  agInit(params: ICellRendererParams): void {
    this.params = params

  }

  ngOnInit(): void {

  }

  onClick($event:string){
    this.params.api.applyTransaction({ remove: [this.params.node.data] });
    this.productService.removeData(this.params.node.data)
  }


  destroy(): void {
  }

}
