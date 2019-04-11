import { Component, OnInit } from '@angular/core';
import { Donut } from '../donut.module';
import { DonutService } from '../donut.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {
  donut: Donut;
  id: number;

  constructor(private donutService: DonutService,
              private route: ActivatedRoute,
              private router: Router
              ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.donut = this.donutService.getDonut(this.id);
        }
      );
  }

}
