import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  showFiller = false;
  ngOnInit(): void { }

  constructor(
    private router: Router,
    private route: ActivatedRoute){

  }

  goProduct() {
    this.router.navigate(['../product'], { relativeTo: this.route });
  }

}
