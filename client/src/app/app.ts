import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { Router, RouterOutlet } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet, ButtonModule, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected router = inject(Router);

}
