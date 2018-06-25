import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  listaCarros(){
    return [
      {nome: "camaro", valor: 200},
      {nome: "camaro 2", valor: 300}
    ];
  }

}
