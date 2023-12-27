import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public pattern: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  search() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        pattern: this.pattern,
      },
      queryParamsHandling: 'merge',
      // skipLocationChange: true,
    });
  }
}
