import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentsmenu',
  templateUrl: './componentsmenu.component.html',
  styleUrls: ['./componentsmenu.component.css']
})
export class ComponentsmenuComponent implements OnInit{
  ngOnInit(): void {
      
  }
  rutas=[{
    name:'Home',
    path:'/about'
  },
  {
    name:'About',
    path:'/about'
  },
  {
    name:'Contact',
    path:'/contact'
  }
  ]
}
