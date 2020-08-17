import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input() task;



  constructor() { }

  ngOnInit(): void {
  }

}
