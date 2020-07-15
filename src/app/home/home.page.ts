import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public alertCtrl: AlertController) {}
  expenses: any = [];
  total = 0;
   budget = {
    expense: '',
    amount: 0
  };
  add() {
    if (this.budget.expense === '' || this.budget.amount === 0) {
        this.showAlert();
        return;
    }
    this.expenses.push(this.budget.expense + ' :' + ' 4#' + this.budget.amount);
    this.total += this.budget.amount;
    console.log(this.expenses);
    this.budget = {expense: ' ', amount: 0};
  }

  delete() {
    this.budget = {expense: ' ', amount: 0};
  }
  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid Details',
      message: 'Kindly check what you input and make correction',
      buttons: ['OK']
    });
    await alert.present();
  }
}
