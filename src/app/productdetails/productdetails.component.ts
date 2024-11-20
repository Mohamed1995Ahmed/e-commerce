import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  private readonly productdetails = inject(ProductService);
  private readonly activerouter = inject(ActivatedRoute);
  productlist: Iproduct | null = null;
  ngOnInit(): void {
    this.activerouter.paramMap.subscribe({
      next: (ids) => {
        const idproduct = ids.get('id');
        if (idproduct) {
          this.productdetails.getspecificproduct(idproduct).subscribe({
            next: (res) => {
              console.log(res.data);
              this.productlist = res.data; // Ensure response matches the Iproduct structure
            },
            error: (err) => {
              console.error('Error fetching product details:', err);
            },
          });
        } else {
          console.error('No product ID found in the route.');
        }
      },
      error: (err) => {
        console.error('Error with route parameters:', err);
      },
    });
  }

  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
}
