import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {RegisterUser} from "./registerUser";
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  registerUser: any = {}

  ngOnInit(): void {
  }

  register(registerUser: RegisterUser) {
    this.authService.register(registerUser)
    //console.log(registerUser)
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
