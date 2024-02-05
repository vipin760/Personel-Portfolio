import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  getSreenWidth!:number;
  togglestatus:boolean=false;
  buttonType:string='fas fa-bars';
  position!:string;
  
  ngOnInit(): void {
    // this.position = this.togglestatus?'-120%':'0%';
    this.onWindowResize()
  }
  ngOnChanges(changes: SimpleChanges): void {
  
  }
  

  @HostListener('window:resize',['$event'])
  onWindowResize(){
    this.getSreenWidth = window.innerWidth
    if(window.innerWidth<991){
      this.position = "-120%"
    }else{
      this.position="0%"
    }
  }

  toggle(){
    this.position = this.togglestatus?"-120%":"0%";
    this.buttonType = this.togglestatus?'fas fa-bars':'fas fa-times';
    this.togglestatus = !this.togglestatus
  }

}
