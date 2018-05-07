// image-provider.ts
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

export class ImageProvider {

  constructor() {
  }

  /**Función que carga imágenes a firebase*/
  uploadImage(image: string, userId: string): any {
    let storageRef = firebase.storage().ref();
    let imageName = this.generateUUID();
    let imageRef = storageRef.child(`${userId}/${imageName}.jpg`);

    return imageRef.putString(image, 'data_url');
  }

  //subir logos de restaurantes
  uploadLogo(image: string, userId: string){
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child(`${'logos'}/${userId}.jpg`);
    return imageRef.putString(image, 'data_url');
  }

  /**Función que devuelve una imagen */
  getLogo(imageId: string): any {
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child(`${'logos'}/${imageId}.JPG`);
    return imageRef.getDownloadURL();
  }

  /**Función que devuelve una imagen */
  getImage(userId: string, imageId: string): any {
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child(`${userId}/${imageId}`);
    return imageRef.getDownloadURL();
  }

  /**Función que genera un Id único para cada imagen*/
  private generateUUID(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

}
