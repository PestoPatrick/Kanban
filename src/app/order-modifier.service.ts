import { Statement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormOrder } from 'src/app/FormOrder';
import { DBOrder } from './DBorder';

@Injectable({
  providedIn: 'root',
})
export class OrderModifierService {

  convertoDB(orderTo: FormOrder) {

    let FB = false;
    let Instagram = false;
    let Email = false;
    let Cash = false;
    let PayPal = false;
    let Bank_Transfer = false;
    let Collection = false;
    let Delivery = false;
    let Post = false;

    if (orderTo.Socials == 'FB') {
      FB = true
    } else if (orderTo.Socials == 'Email') {
      Email = true
    } else if (orderTo.Socials == 'Instagram') {
      Instagram = true
    }

    if (orderTo.Payment == 'Cash') {
      Cash = true
    } else if (orderTo.Payment == 'PayPal') {
      PayPal = true
    } else if (orderTo.Payment == 'Bank_Transfer') {
      Bank_Transfer = true
    }

    if (orderTo.DeliveryMethod == 'Post') {
      Post = true;
    } else if (orderTo.DeliveryMethod == 'Delivery') {
      Delivery = true;
    } else if (orderTo.DeliveryMethod == 'Collection') {
      Collection = true;
    }

    let DBSubmission = {
      _id: orderTo._id,
      Name: orderTo.Name,
      Date: new Date(orderTo.Date).toISOString(),
      FB: FB,
      Instagram: Instagram,
      Email: Email,
      Item: orderTo.Item,
      Design: orderTo.Design,
      Colour: orderTo.Colour,
      Amount: orderTo.Amount,
      PayPal: PayPal,
      Bank_Transfer: Bank_Transfer,
      Cash: Cash,
      Address: orderTo.Address,
      Collection: Collection,
      Post: Post,
      Delivery: Delivery,
      State: orderTo.State,
    }

    return DBSubmission;
  }

  DateConvert(order) {
    let newdate;
    let year;
    let month;
    let dt;

    let date = new Date(order.Date);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    dt = date.getDate();
    if (dt < 10) {
      dt = String(dt);
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return newdate = (year + '-' + month + '-' + dt);
  }


  convertFromDB(orderFrom: DBOrder) {
    let Socials: string;
    let Payment: string;
    let DeliveryMethod: string;
    let readableDate: String;


    // formOrder = Object.assign(orderFrom, formOrder)

    if (orderFrom.FB == true) {
      Socials = 'FB';
    } else if (orderFrom.Instagram == true) {
      Socials = 'Instagram';
    } else if (orderFrom.Email == true) {
      Socials = 'Email';
    } else {
      console.log(' error the options for social media are wrong ');
    }

    if (orderFrom.Collection == true) {
      DeliveryMethod = 'Collection';
    } else if (orderFrom.Delivery == true) {
      DeliveryMethod = 'Delivery'
    } else if (orderFrom.Post == true) {
      DeliveryMethod = 'Post'
    }

    if (orderFrom.PayPal == true) {
      Payment = 'PayPal';
    } else if (orderFrom.Cash == true) {
      Payment = 'Cash';
    } else if (orderFrom.Bank_Transfer == true)
      Payment = 'Bank Transfer';

    readableDate = this.DateConvert(orderFrom)

    let formOrder = {
      _id: orderFrom._id,
      Name: orderFrom.Name,
      Date: readableDate,
      Socials: Socials,
      Payment: Payment,
      DeliveryMethod: DeliveryMethod,
      Item: orderFrom.Item,
      Design: orderFrom.Design,
      Colour: orderFrom.Colour,
      Amount: orderFrom.Amount,
      Address: orderFrom.Address,
      State: orderFrom.State,
    };

    return formOrder;
  }

  constructor() { }
}
