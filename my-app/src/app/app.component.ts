import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  input:string = '';
  result:string = '';

  pressNum = (num:string) => {
    this.input += num;
    return this.input
  }

  
  clear = () => {
    if (this.input !="" ) {
      this.input=this.input.slice(0, -1)
    }
  }
 
  allClear = () => {
    this.result = '';
    this.input = '';
  }
  
   getAnswer = () => {
     this.result = eval(this.input)
     this.input = this.result
     return this.result
   }
 }