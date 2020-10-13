import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  log = false;
  hide = false;
  message: string;

  ngOnInit(): void {
    if (this.authService.isAuthenticated) {
      this.log = true;}
  }

  logOut() {
    this.authService.logOut();
    this.log = false;
    this.hide=true;
    this.message = "Çıkış yapıldı."
  }

  goToLoginPage(){
    if (this.log) {
      this.message = "Zaten giriş yapıldı."
      this.hide = true;
    } else {
      this.router.navigateByUrl('/login')
    }
  }

  goAuthorPage() {
    if (this.authService.isAuthenticated) {
      this.log = true;
      this.router.navigateByUrl('/author')
    } else {
      this.message = "Sayfayı görüntüleyebilmek için giriş yapılmalıdır."
      this.hide = true;
    }
  }

}
