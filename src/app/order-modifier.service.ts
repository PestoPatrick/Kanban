import { Injectable } from '@angular/core';
import { FormOrder } from 'src/app/FormOrder'

@Injectable({
  providedIn: 'root'
})
export class OrderModifierService {

  convertoDB(order) {

  }

  convertFromDB(orderFrom) {

    let socials

    // formOrder = Object.assign(orderFrom, formOrder)

    if (orderFrom.FB == true) {
      socials = 'FB'
    } else if (orderFrom.Instagram == true) {
      socials = 'Instagram'
    } else if (orderFrom.Email == true) {
      socials = 'Email'
    }


    let formOrder = {
      Name: orderFrom.Name,
      Date: new Date(orderFrom.Date.toString()),
      socials: socials


    }
  }

  constructor() { }
}
