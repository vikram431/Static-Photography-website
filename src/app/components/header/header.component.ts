import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private router: Router) {}

     navigate(path: string): void {
    console.log(path);
    this.router.navigate([path]);
    // this.mobileMenuOpen = false;
  }

  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

}
