import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reco-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './reco-product.component.html',
  styleUrls: ['./reco-product.component.css'],
})
export class RecoProductComponent {
  num: number = 55;

  @Input() any: string = '';

  featuredProducts = [
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
    {
      id: 4,
      name: 'Product 4',
      price: 29.99,
      imageUrl: '/Screenshot (12).png',
    },
  ];

  @Output() items: EventEmitter<string> = new EventEmitter<string>();
  onfireevent(): void {
    this.items.emit('this i s output');
  }
}
