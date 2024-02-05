import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EducationComponent } from './components/pages/education/education.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AboutComponent,HomeComponent,PortfolioComponent,ContactComponent,EducationComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
