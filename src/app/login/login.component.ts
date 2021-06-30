import {Component, OnInit} from '@angular/core';
import {RestService} from "../rest.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private RestService: RestService, private formBuilder: FormBuilder,
              private cookieService: CookieService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  enviarDatos(): void {
    this.RestService.post('http://localhost:3000/login', this.form.value)
      .subscribe((res: any) => {
        console.log('login exitoso!');
        this.cookieService.set('token_access', res.accessToken, 4, '/');
        this.router.navigate(['/']);
      })

  }

}
