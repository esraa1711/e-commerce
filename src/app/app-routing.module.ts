import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    component: ProductListComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"product details/:id",
    component: ProductDetailsComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
