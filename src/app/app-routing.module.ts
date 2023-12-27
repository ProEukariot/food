import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartComponent } from './cart/cart.component';
import { NotFound404Component } from './not-found404/not-found404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
