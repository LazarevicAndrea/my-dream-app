import { Component, OnInit, Input } from '@angular/core';
import { Donut } from '../../donut.module';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  @Input() donut: Donut
  @Input() index: number;
  

  constructor() { }

  ngOnInit() {
  }

}
