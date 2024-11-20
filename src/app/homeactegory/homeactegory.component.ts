import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Icategory } from '../icategory';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../product.service';
import { subscribe } from 'diagnostics_channel';
import { Iproduct } from '../iproduct';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { AnypipePipe } from '../anypipe.pipe';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
// Import the CarouselModule

@Component({
  selector: 'app-homeactegory',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    RouterLink,
    AnypipePipe,
    SearchPipe,
    FormsModule,
  ], // Add CarouselModule here

  templateUrl: './homeactegory.component.html',
  styleUrls: ['./homeactegory.component.css'], // Fixed typo in styleUrls
})
export class HomeactegoryComponent implements OnInit {
  categoriesList: Icategory[] = []; // Store fetched categories
  text: string = '';
  private readonly productservice = inject(ProductService);
  private readonly cart = inject(CartService);
  data = new Date();
  productlist1: Iproduct[] = [];
  categoryoption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  categoryoption1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    // Fetch categories when the component initializes
    this.categoriesService.getallcategories().subscribe({
      next: (res) => {
        console.log('Categories fetched successfully:', res.data);
        this.categoriesList = res?.data || []; // Assign response data to categoriesList
      },
      error: (err) => {
        console.error('Error fetching categories:', err.data);
      },
    });

    this.productservice.getallproduct().subscribe({
      next: (res) => {
        this.productlist1 = res.data;
        console.log('product', res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  trackByProductId(index: number, product: any): string {
    return product._id; // Unique identifier for the product
  }
  addcart(id: string): void {
    this.cart.getproducttocart(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
