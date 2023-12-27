import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/models/food';
import { Observable } from 'rxjs';
import { FoodService } from '../services/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  public item!: Food;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodService: FoodService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) this.router.navigateByUrl('/');

      const id = <number>params['id'];

      this.foodService.getById(id).subscribe((item) => {
        if (!item) {
          this.router.navigateByUrl('/');
          console.log('Food:', item);
        }
        this.item = <Food>item;
      });
    });
  }

  addToCart(){
    console.log("add to cart in food-page");

    this.cartService.addToCart(this.item);
  }
}
