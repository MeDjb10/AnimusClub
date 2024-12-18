import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'http://localhost:3500/user'; // Adjust the URL based on your project structure
  private readonly USER_ID_KEY = 'user_id';
  private authenticated = false;
  isAnAdmin ="admin" ;
  constructor(private router: Router, private userService: UserService) {}

  login(username: string, password: string): void {
    this.userService.getUserByUsername(username).subscribe(
      (authenticatedUser) => {
        if (authenticatedUser && authenticatedUser.password === password) {
          localStorage.setItem(
            this.USER_ID_KEY,
            authenticatedUser.id.toString()
          );
          if (authenticatedUser.isAdmin) {
            localStorage.setItem(this.isAnAdmin,"true");
            this.router.navigate(['/dashboard']);
            
          } else {
            localStorage.setItem(this.isAnAdmin, 'false');
            this.router.navigate(['/home']);
          }
        } else {
          alert('User not found or incorrect password');
         
        }
      }
    );
  }
  logout(): void {
    localStorage.removeItem(this.USER_ID_KEY);
    localStorage.removeItem(this.isAnAdmin);
    this.router.navigate(['/loginpage']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.USER_ID_KEY);
  }

  setAuthenticated(value: boolean): void {
    this.authenticated = value;
  }

  getCurrentUserId(): string | null {
    const storedUserId = localStorage.getItem(this.USER_ID_KEY);

    if (storedUserId) {
      return storedUserId;
    } else {
      return null;
    }
  }
}
