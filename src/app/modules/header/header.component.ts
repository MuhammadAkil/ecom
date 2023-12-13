import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen:boolean=true;


  toggle(){
    this.isOpen=!this.isOpen;
    console.log(this.isOpen)
  }
  
}
