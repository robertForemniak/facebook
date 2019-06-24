import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
    // instancja klasy
    console.log('constructor');
   }

  ngOnInit() {
    // wyrenderowanie komponentu w DOM
    console.log('ngOnInit');
  }
//   ngOnChanges(){
//   console.log('ngOnChanges');

// }
//   ngOnDestroy(){
//   console.log('ngOnDestroy');

// }

}
