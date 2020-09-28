import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderColumnsComponent } from '../order-columns/order-columns.component';
import { DBOrder } from '../DBorder';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio'

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.scss']
})
export class ViewOrderDetailsComponent implements OnInit {
  @Input() order: DBOrder;

  constructor(public dialogRef: MatDialogRef<ViewOrderDetailsComponent>, @Inject(MAT_DIALOG_DATA) public orderinfo) { }

  onCloseClick() {
    this.dialogRef.close();
    console.log(this.dialogRef)
  }

  onCloseSave() {
    this.dialogRef.close();
    console.log(this.dialogRef)
  }

  ngOnInit() {
    console.log(this.orderinfo.orderinfo)
  }

}
