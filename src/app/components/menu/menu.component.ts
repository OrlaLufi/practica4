import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
ngOnInit(): void {
  
}
  rutas=[
  {
    name:'home',
    Path:'/home'
  },
  {
    name:'about',
    Path:'/about'
  },
  {
    name:'contact',
    Path:'/contact'
  }
];
}
