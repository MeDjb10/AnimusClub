import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, private auth: AuthService) {}
  isScrolled = false;
  logedIn = this.auth.isAuthenticated();
  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowScroll() {
    if (window.scrollY > 60 || window.innerWidth <= 1000.9) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  goToLogin() {
    this.router.navigate(['/loginpage']);
  }

  logOut() {
    this.auth.logout();
    
  }

  showAlert() {
    if (!this.logedIn) {
      alert('you should log in first');
      this.router.navigate(['/home']);
    }
  }
  toUser() {
    this.router.navigate(['/home/user']);
  }
}
