import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],

})
export class NavBarComponent implements OnInit {
  user:any
  isLogin:boolean = false

  ngOnInit(): void {
    this.user = this.auth.getUser()
    this.isLogin = this.auth.isLogin
   }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private oauthService: OAuthService,
  ) { }






  goProduct() {
    this.router.navigate(['../product'], { relativeTo: this.route });
  }
  goCart() {
    this.router.navigate(['../cart'], { relativeTo: this.route });
  }

  logout() {
    this.auth.isLogin = false
    this.oauthService.logOut();
    this.router.navigate(['../signin'], { relativeTo: this.route });
  }

  home() {
    this.router.navigate(['../home'], { relativeTo: this.route });
  }

}
