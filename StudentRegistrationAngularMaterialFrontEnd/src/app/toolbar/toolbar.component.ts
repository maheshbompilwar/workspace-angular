import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './menu-item.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Events',
      icon: 'event',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Contacts',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Docs',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Login',
      icon: 'login',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onclick(lable: string) {
    console.log("Lable---" + lable);

    switch (lable) {
      case 'Home': {
        //statements; 
        this.router.navigate(['/home']);
        break;
      }
      case 'Events': {
        //statements; 
        this.router.navigate(['/home']);
        break;
      }
      case 'Contacts': {
        //statements; 
        this.router.navigate(['/home']);
        break;
      }
      case 'Login': {
        //statements; 
        this.router.navigate(['/login']);
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

  }


}
