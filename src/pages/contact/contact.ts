import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CarrosproviderProvider } from '../../providers/carrosprovider/carrosprovider';
import { carro } from '../home/carro';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  
  public carros:carro[];
  constructor(public navCtrl: NavController, private _carrosProvider: CarrosproviderProvider, private alertCtrl: AlertController) {

  }
ionViewDidLoad(){
  this._carrosProvider.listaCarros().subscribe((res)=>{
    this.carros = JSON.parse(JSON.stringify(res));
  });
}

  mostraMensagem(){
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
