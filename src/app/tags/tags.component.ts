import { Component, Input, OnInit } from '@angular/core';
import { FoodService, TagMap } from '../services/food.service';
import { Tag } from 'src/models/tag';
import { Observable, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/models/food';

interface Dictionary<T> {
  [key: string]: T;
}

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Input({ required: true }) food$!: Observable<Food[]>;
  public tags: Tag[] = [];
  public total: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.food$.subscribe((food) => {
      console.log('CHILD FOOD:', food);

      // for 'all' tag
      this.total = food.length;

      // counting tags
      let dict: Dictionary<number> = {};
      for (let item of food) {
        if (item.tags) {
          for (let tag of item.tags) {
            if (!dict[tag]) {
              dict[tag] = 1;
            } else {
              dict[tag] += 1;
            }
          }
        }
      }

      // tags to tag array
      this.tags = Object.entries(dict)
        .map((tags) => {
          // this.total += tags[1];  // total tags number
          const tag = new Tag();
          tag.name = tags[0];
          tag.count = tags[1];
          return tag;
        })
        // tags order asc and first n tags
        .sort((tagA, tagB) => tagB.count - tagA.count)
        .slice(0, 5);
    });
  }

  search(tag: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tag: tag,
      },
      queryParamsHandling: 'merge',
    });
  }
}
