import { Statement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormOrder } from 'src/app/FormOrder';

@Injectable({
  providedIn: 'root',
})
export class OrderModifierService {

  convertoDB(orderTo) {

    let FB = false;
    let Instagram = false;
    let Email = false;
    let Cash = false;
    let PayPal = false;
    let Bank_Transfer = false;
    let Collection = false;
    let Delivery = false;
    let Post = false;

    if (orderTo.socials == 'FB') {
      FB = true
    } else if (orderTo.socials == 'Email') {
      Email = true
    } else if (orderTo.socials == 'Instagram') {
      Instagram = true
    }

    if (orderTo.payment == 'Cash') {
      Cash = true
    } else if (orderTo.payment == 'PayPal') {
      PayPal = true
    } else if (orderTo.payment == 'Bank_Transfer') {
      Bank_Transfer = true
    }

    if (orderTo.deliverymethod == 'Post') {
      Post = true;
    } else if (orderTo.deliverymethod == 'Delivery') {
      Delivery = true;
    } else if (orderTo.deliverymethod == 'Collection') {
      Collection = true;
    }

    let DBSubmission = {
      _id: orderTo._id,
      Name: orderTo.Name,
      Date: orderTo.Date,
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

  convertFromDB(orderFrom) {
    let socials: string;
    let payment: string;
    let deliverymethod: string;

    // formOrder = Object.assign(orderFrom, formOrder)

    if (orderFrom.FB == true) {
      socials = 'FB';
    } else if (orderFrom.Instagram == true) {
      socials = 'Instagram';
    } else if (orderFrom.Email == true) {
      socials = 'Email';
    } else {
      console.log(' error the options for social media are wrong ');
    }

    if (orderFrom.Collection == true) {
      deliverymethod = 'Collection';
    } else if (orderFrom.Delivery == true) {
      deliverymethod = 'Delivery'
    } else if (orderFrom.Post == true) {
      deliverymethod = 'Post'
    }

    if (orderFrom.PayPal == true) {
      payment = 'PayPal';
    } else if (orderFrom.Cash == true) {
      payment = 'Cash';
    } else if (orderFrom.Bank_Transfer == true)
      payment = 'Bank Transfer';

    let formOrder = {

      Name: orderFrom.Name,
      Date: new Date(orderFrom.Date.toString()),
      socials: socials,
      payment: payment,
      deliverymethod: deliverymethod,
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
