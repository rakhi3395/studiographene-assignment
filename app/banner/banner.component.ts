import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  navbar = [
    { name: 'Home', id: 'home'},
    { name: 'About', id: 'about' },
    { name: 'Our Products', id: 'product', child: [
    { name: 'Product 1', id: 'p1'},
    { name: 'Product 2', id: 'p2' },
    { name: 'Product 3', id: 'p3'},
    { name: 'Product 4', id: 'p4' },
    ] },
    { name: 'Contact Us', id: 'contact'},
    ];
constructor() {}

}
