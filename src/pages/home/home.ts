import { CarrosproviderProvider } from './../../providers/carrosprovider/carrosprovider';
import { carro } from './carro';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros:carro[];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private _carrosProvider: CarrosproviderProvider) {
    
  }
 
  ionViewDidLoad(){
    this.carros = this._carrosProvider.listaCarros();
  }

  mostraMensagem(){
    console.log('mensagem gil')
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
