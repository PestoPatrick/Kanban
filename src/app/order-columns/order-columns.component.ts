import { Component, OnInit } from '@angular/core';
import { TASKS } from '../mock-tasks';
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



  tasks1 = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  tasks2 = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  tasks3 = [
    'More random tasks',
    'Random stuff',
    'Newer random stuff',
    'Lots to do'
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



  constructor() { }

  ngOnInit(): void {

  }
}
