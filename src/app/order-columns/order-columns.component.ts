import { Component, OnInit } from '@angular/core';
import { Task } from "../task";
import { OrderService } from "../order.service";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-order-columns',
  templateUrl: './order-columns.component.html',
  styleUrls: ['./order-columns.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderColumnsComponent implements OnInit {



  tasks1: Task[];

  tasks2 = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(moveItemInArray(event.container.data, event.previousIndex, event.currentIndex));
    } else {
      console.log(transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex));
    }
  }

  getTasks(): void {
    this.orderService.getTasks()
    .subscribe(tasks => this.tasks1 = tasks)
  }


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getTasks();
  }
}
