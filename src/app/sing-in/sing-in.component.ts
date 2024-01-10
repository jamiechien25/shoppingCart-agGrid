import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { authCodeFlowConfig } from '../auth.config';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
})
export class SingInComponent implements OnInit {
  public loginForm!: FormGroup
  email: string | undefined;
  password: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private oauthService: OAuthService
    ) {
      this.oauthService.events
        .subscribe((e) => console.log(e));
    }



  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(x=> console.log(this.oauthService.hasValidIdToken()));
  }
  login() {
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe(res => {
      const user = () => {
        return res.user[0].email === this.loginForm.value.email && res.user[0].password === this.loginForm.value.password
      }

      if (user() || this.oauthService.hasValidIdToken()) {
        this.auth.setUser(res.user[0].email)
        res.user[0].email === this.loginForm.value.email && res.user[0].password === this.loginForm.value.password
        alert("Login Success!!");
        this.auth.isLogin = true
        this.loginForm.reset();
        this.router.navigate(['home'])
      } else {
        alert("user not found!!");
        this.auth.isLogin = false
      }

    })
  }

  OAuthLogIn(){
    this.oauthService.initCodeFlow();
    this.login()

  }



}
