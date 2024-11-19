import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  @Input() categories = [
    {
      name: 'Electronics',
      imageUrl: 'Screenshot (21).png',
      link: '/electronics',
    },
    { name: 'Clothing', imageUrl: 'Screenshot (22).png', link: '/clothing' },
    {
      name: 'Home Appliances',
      imageUrl: 'Screenshot (23).png',
      link: '/home-appliances',
    },
    { name: 'Books', imageUrl: 'Screenshot (24).png', link: '/books' },
    { name: 'Toys', imageUrl: 'Screenshot (25).png', link: '/toys' },
    { name: 'Sports', imageUrl: 'Screenshot (26).png', link: '/sports' },
    { name: 'Beauty', imageUrl: 'Screenshot (22).png', link: '/beauty' },
    { name: 'Groceries', imageUrl: 'Screenshot (28).png', link: '/groceries' },
    { name: 'Furniture', imageUrl: 'Screenshot (29).png', link: '/furniture' },
    { name: 'Shoes', imageUrl: 'Screenshot (36).png', link: '/shoes' },
    { name: 'Jewelry', imageUrl: 'Screenshot (37).png', link: '/jewelry' },
    {
      name: 'Accessories',
      imageUrl: 'Screenshot (40).png',
      link: '/accessories',
    },
    { name: 'Gaming', imageUrl: 'Screenshot (43).png', link: '/gaming' },
    { name: 'Music', imageUrl: 'Screenshot (21).png', link: '/music' },
    {
      name: 'Art Supplies',
      imageUrl: 'Screenshot (23).png',
      link: '/art-supplies',
    },
  ];
}
