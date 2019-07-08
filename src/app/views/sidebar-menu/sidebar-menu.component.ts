import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items: NbMenuItem[] = [
    {
      title: 'Enel',
      link: '/enel',
      icon: 'far fa-lightbulb',
    },
    {
      title: 'Aguas Andinas',
      link: '/aguas-andinas',
      icon: 'fas fa-tint',
    },
  ];

}
