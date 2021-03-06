// image-provider.ts
import { Injectable } from '@angular/core';
import firebase from 'firebase';
export class ImageProvider {

  
  constructor() {
  }

  /**Función que carga imágenes a firebase*/
  uploadImage(image: string, userId: string): any {
    let storageRef = firebase.storage().ref();
    let imageName = this.generateUUID();
    let imageRef = storageRef.child('Comidas/'+`${userId}/${imageName}.jpg`);
    /*var metadata = {
      customMetadata:{
      'tipo':'1',
      'precio': '2'
      }
    };
    return imageRef.put(image,metadata);*/
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
    console.log(imageRef.getDownloadURL);
    return imageRef.getDownloadURL;
  }

  /**Función que devuelve una imagen */
  getImageFromUser(userId: string, imageId: string): any {
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child(`${userId}/${imageId}`);
    return imageRef.getDownloadURL();
  }

  getImages(): any {
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child('comidas/');
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
