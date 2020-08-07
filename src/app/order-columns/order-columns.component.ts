import { Component, OnInit } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-order-columns',
  templateUrl: './order-columns.component.html',
  styleUrls: ['./order-columns.component.scss']
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
