import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  menuButton:boolean=true;
  defaultPosition!:boolean
  getScreenWidth!:number;
  
  ngOnInit(): void {
 this.onWindowResize()
  }
  ngOnChanges(changes: SimpleChanges): void {
  
  }
  

  @HostListener('window:resize',['$event'])
  onWindowResize(){
    this.getScreenWidth = window.innerWidth
    if(window.innerWidth<991){
      this.menuButton = true
    }else{
      this.menuButton = false
    }
  }

  toggle(){
    if(this.getScreenWidth<991){
      this.menuButton = !this.menuButton
    }
  }

}
