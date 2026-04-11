import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { ToastService } from '../../core/services/toast-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})    
export class Nav {
  protected accountService = inject(AccountService);
  private toastService = inject(ToastService);
  private router = inject(Router);
  protected creds: any = {};
  

  login(){

    this.accountService.login(this.creds).subscribe({
      next: response => {
        this.router.navigateByUrl('/members');
        this.toastService.showSuccessToast('Login successful!');
        this.creds = {}
      },
      error: error => {
        const detail =
          error?.error?.message ||
          (typeof error?.error === 'string' ? error.error : null) ||
          'Login failed. Please check your credentials and try again.';
        this.toastService.showErrorToast(detail);
      },
      complete: () => console.log('Login request completed')
    })
  }

  logout(){
    this.router.navigateByUrl('/');
    this.accountService.logout();
  }



  
}
