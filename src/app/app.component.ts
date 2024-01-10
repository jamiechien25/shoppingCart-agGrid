import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { authCodeFlowConfig } from './auth.config';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngSocialloginDemo';
  LoginStatus: boolean = false

  constructor(
    private oauthService: OAuthService,
    private auth: AuthService
  ) {
    this.oauthService.events
      .subscribe((e) => console.log(e));
  }

  ngOnInit(): void {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(x => {
      this.auth.isLogin = this.oauthService.hasValidIdToken();
      this.LoginStatus =  this.auth.isLogin
      if(this.oauthService.hasValidIdToken()){
        this.oauthService.loadUserProfile().then(x=> {
          const finalUser = x.given_name + ' '+ x.family_name
          this.auth.setAuthInfo(x)
          this.auth.setUser(finalUser)
        })
      }
    });

  }

  click() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }



}

