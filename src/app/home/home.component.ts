import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // CommonModule for ngIf, ngFor, etc.
import { RouterLink, RouterOutlet } from '@angular/router'; // To enable routing
import { routes } from '../app.routes';
import { NewProductsComponent } from '../new-products/new-products.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { RecoProductComponent } from '../reco-product/reco-product.component';
import { AlertComponent } from '../alert/alert.component';
import { CategoryComponent } from '../category/category.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    NewProductsComponent,
    ProductListComponent,
    RecoProductComponent,
    AlertComponent,
    CategoryComponent,
  ], // Import the necessary modules here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  featuredProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      imageUrl: '/Screenshot (11).png',
      stars: 4, // Number of stars
      rating: this.calculateRating(4), // Calculate rating based on stars
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      imageUrl: '/Screenshot (37).png',
      stars: 5,
      rating: this.calculateRating(5),
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      imageUrl: '/Screenshot (38).png',
      stars: 3,
      rating: this.calculateRating(3),
    },
  ];
  calculateRating(stars: number): string {
    switch (stars) {
      case 5:
        return 'Excellent'; // 5 stars = Excellent
      case 4:
        return 'Very Good'; // 4 stars = Very Good
      case 3:
        return 'Good'; // 3 stars = Good
      case 2:
        return 'Fair'; // 2 stars = Fair
      case 1:
        return 'Poor'; // 1 star = Poor
      default:
        return 'No Rating'; // 0 stars = No Rating
    }
  }

  banners = [
    { imageUrl: '/Screenshot (39).png', link: '/products' },
    { imageUrl: '/Screenshot (40).png', link: '/sales' },
  ];

  categories = [
    {
      name: 'Electronics',
      imageUrl: '/Screenshot (22).png',
      link: '/electronics',
    },
    { name: 'Clothing', imageUrl: '/Screenshot (44).png', link: '/clothing' },
    {
      name: 'Home Appliances',
      imageUrl: '/Screenshot (43).png',
      link: '/home-appliances',
    },
  ];
  isRed: boolean = false;
  items: string[];
  constructor(private dataService: DataService) {
    this.items = dataService.asd;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.items.pop();
  }
}
