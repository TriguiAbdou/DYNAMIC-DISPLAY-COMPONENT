import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jqx-bar-gauge',
  templateUrl: './jqx-bar-gauge.component.html',
  styleUrls: ['./jqx-bar-gauge.component.css']
})
export class JqxBarGaugeComponent implements OnInit {

  values: number[] = [102, 115, 130, 137];
  
  constructor() { }

  ngOnInit() {
  }

}
