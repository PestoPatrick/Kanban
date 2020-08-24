import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { SortOrdersService } from '../sort-orders.service';
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

  allorders = [];

  ordered = [];
  instock = [];
  soaked = [];
  tied = [];
  dyed = [];
  rinsed = [];
  washed = [];
  dried = []
  ironed = [];
  packaged = [];
  posted = [];
  delivered = [];
  completed = [];


  orders2 = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];

  orders3 = [
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

  SortedOrders(): void {
    this.sortedOrders.getOrders()
      .subscribe((orders: Order[]) => {

        // can do the assigning of orders here instead of
        // making an all orders array
        this.allorders = orders;
      });
  }


  constructor(private sortedOrders: SortOrdersService) {
  }

  ngOnInit(): void {
    this.SortedOrders();
  }
}
