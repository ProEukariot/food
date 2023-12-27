import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from 'src/models/food';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public food$!: Observable<Food[]>;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.food$ = this.foodService.getAll().pipe(
        // filtering by name pattern
        map((food) => {
          if (params['pattern']) {
            return food.filter((item) =>
              item.name.toLowerCase().includes(params['pattern'].toLowerCase())
            );
          }
          return food;
        }),
        // filtering by tag
        map((food) => {
          if (params['tag']) {
            return food.filter((item) =>
              item.tags?.includes(params['tag'].toLowerCase())
            );
          }
          return food;
        })
      );

      this.food$.subscribe((d) => console.log(d));
    });
  }
}
