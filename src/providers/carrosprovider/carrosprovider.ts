import { carro } from './../../pages/home/carro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

/*
  Generated class for the CarrosproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrosproviderProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CarrosproviderProvider Provider');
  }

  listaCarros() {
    return this.http.get<carro[]>('assets/data/carros.json');
  } 

    
  

}
