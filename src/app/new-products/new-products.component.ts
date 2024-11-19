import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css'],
})
export class NewProductsComponent {
  newProducts = [
    {
      id: 1,
      name: 'New Product 1',
      price: 59.99,
      imageUrl: '/Screenshot (15).png',
    },
    {
      id: 2,
      name: 'New Product 2',
      price: 89.99,
      imageUrl: '/Screenshot (16).png',
    },
    {
      id: 3,
      name: 'New Product 3',
      price: 39.99,
      imageUrl: '/Screenshot (17).png',
    },
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      imageUrl: '/Screenshot (12).png',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      imageUrl: '/Screenshot (13).png',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      imageUrl: '/Screenshot (14).png',
    },
  ];
}
