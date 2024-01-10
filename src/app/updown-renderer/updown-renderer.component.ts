import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-updown-renderer',
  templateUrl: './updown-renderer.component.html',
  styleUrls: ['./updown-renderer.component.scss']
})
export class UpdownRendererComponent implements OnInit, ICellRendererAngularComp {

  constructor() { }

  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  up() {
    this.params.node.data.productCount++;
    this.params.api.refreshCells({ force: true });
  }

  down() {
    this.params.node.data.productCount--;
    this.params.api.refreshCells({ force: true });
  }

  refresh(): boolean {
    return false;
  }

  ngOnInit(): void {
  }

}
