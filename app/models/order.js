import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
import { action } from '@ember/object';

export default class OrderModel extends Model {
  @attr('date') dateCreation;
  @attr('number') amount;
  @attr('number') toPay;
  @attr('string') status;
  @attr('number') itemsNumber;
  @attr('number') missingNumber;
  @hasMany('orderdetail') orderdetails;
  @belongsTo('user') user;

  get count() {
    return this.orderdetails.length;
  }

  get status() {
    return this.status;
  }

  get user() {
    return this.user;
  }

  @action
  changeStatus() {
    this.status = 'prepared';
  }
}
