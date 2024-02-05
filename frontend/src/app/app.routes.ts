import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { EducationComponent } from './components/pages/education/education.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'education',component:EducationComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}
];
