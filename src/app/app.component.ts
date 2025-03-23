import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `<app-header/> <app-home/> <router-outlet/>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularfront';
}
