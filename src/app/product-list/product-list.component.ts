import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecoProductComponent } from '../reco-product/reco-product.component';
import { Add1Directive } from '../add1.directive'; // Assuming Add1Directive is imported

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RecoProductComponent,
    Add1Directive,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  role: string = 'admin';
  action1: string = '';

  featuredProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      imageUrl: 'Screenshot (12).png',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      imageUrl: 'Screenshot (13).png',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      imageUrl: 'Screenshot (14).png',
    },
  ];

  @ViewChild('asd') child!: ElementRef;
  @ViewChild(RecoProductComponent) child2!: RecoProductComponent;

  data: string = 'Mohamed Abdelhakem';

  ngOnInit() {
    // You can perform additional initialization logic if needed
  }

  show(): void {
    if (this.child) {
      this.child.nativeElement.classList.add('d-none');
    }
  }

  shows(): void {
    if (this.child2) {
      console.log(this.child2.num); // Assuming `num` is a property in `RecoProductComponent`
    }
  }
}
