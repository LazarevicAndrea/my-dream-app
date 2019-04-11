import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //zoom: number = 500;
  lat: number = 44.820809;
  lng: number = 20.458707;

  constructor() { }

  ngOnInit() {
  }

}
