import { Router } from '@angular/router';
import { Product } from '../../Products';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private dashboardService: DashboardService,

    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dashboardService.getProducts().subscribe({
      next: (response) => {
        console.warn({ response });
        this.products = response.data;
      },
      error: (error) => {
        console.warn({ error });
      },
    });
  }

  closeSession() {
    this.authService.logOut();
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 200);
  }
}
