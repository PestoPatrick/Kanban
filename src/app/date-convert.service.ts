import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateConvertService {

  constructor() { }

  DateChange(dateToChange) {
    let date = new Date(dateToChange);
    let year;
    let month;
    let dt;

    year = date.getFullYear();
    month = date.getMonth() + 1;
    dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    let newDate = year + '-' + month + '-' + dt;
    return newDate;
  }

}
