import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,) {
  }

  log=false;
  loginUser: any = {}
  err = false;

  ngOnInit(): void {
    if (this.authService.isAuthenticated) {
      this.log = true;
      this.router.navigateByUrl('/home')
    }
  }

  login(loginUser) {
    this.authService.login(loginUser)
    if (this.authService.isAuthenticated) {
      this.err=false;
      this.router.navigateByUrl('/home')
    } else {
      this.err = true;
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  require = new FormControl('', [Validators.required]);
  hide = true;

  errorMessage() {
    if (this.require.hasError('required')) {
      return 'You must enter a value';
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
