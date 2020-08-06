import { Component, OnInit, Input } from '@angular/core';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-order-columns',
  templateUrl: './order-columns.component.html',
  styleUrls: ['./order-columns.component.scss']
})
export class OrderColumnsComponent implements OnInit {


  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
