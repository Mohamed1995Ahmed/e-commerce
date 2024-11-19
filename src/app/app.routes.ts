import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { MovieComponent } from './movie/movie.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { authloginGuard } from './guards/authlogin.guard';
import { HomeactegoryComponent } from './homeactegory/homeactegory.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
    children: [
      { path: 'productlist', component: ProductListComponent },
      { path: 'newproducts', component: NewProductsComponent },
      { path: 'newproducts', component: CategoryComponent },
    ],
  },
  { path: 'productlist', component: ProductListComponent },
  {
    path: 'newproducts',
    component: NewProductsComponent,
    canActivate: [authGuard],
  },
  { path: 'category', component: CategoryComponent },
  { path: 'post', component: PostComponent, canActivate: [authGuard] },
  { path: 'movies', component: MovieComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent, canActivate: [authloginGuard] },
  { path: 'home1', component: HomeactegoryComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent },

  // Default route

  // Default route
];
