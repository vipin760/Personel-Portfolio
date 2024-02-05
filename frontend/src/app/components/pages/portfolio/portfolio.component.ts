import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portfolio, portfolioData } from 'src/data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
data:Portfolio[] = portfolioData
}
