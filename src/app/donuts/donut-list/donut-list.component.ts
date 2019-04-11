import { Component, OnInit, OnDestroy } from '@angular/core';
import { Donut } from '../donut.module';
import { Subscription } from 'rxjs/Subscription';
import { DonutService } from '../donut.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit, OnDestroy {
  donuts: Donut[];
  subscription: Subscription;

  constructor(private donutService: DonutService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.donutService.donutsChanged
    .subscribe(
      (donuts: Donut[]) => {
        this.donuts = donuts;
      }
    );
    this.donuts = this.donutService.getDonuts();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}



  

  

