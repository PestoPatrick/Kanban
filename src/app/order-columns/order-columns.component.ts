import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-order-columns',
  templateUrl: './order-columns.component.html',
  styleUrls: ['./order-columns.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderColumnsComponent implements OnInit {
  orders1: Order[];

  orders2 = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];

  tasks3 = [
    'More random tasks',
    'Random stuff',
    'Newer random stuff',
    'Lots to do'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        )
      );
    } else {
      console.log(
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        )
      );
    }
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe((orders: Order[]) => {
        this.orders1 = orders;
        console.log(this.orders1);
      });
  }


  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getOrders();
  }
}
