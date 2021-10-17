import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const showMenu = (headerToggle, navbarId) => {
      const toggleBtn = document.getElementById(headerToggle),
        nav = document.getElementById(navbarId);
    
      // Validate that variables exist
      if (headerToggle && navbarId) {
        toggleBtn.addEventListener('click', () => {
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu');
          // change icon
          toggleBtn.classList.toggle('bx-x');
        });
      }
    };
    showMenu('header-toggle', 'navbar');
  
  }

  v
}
