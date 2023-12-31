import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router)

  // ===== Loading =====
  loading() {
    return this.loadingCtrl.create({ spinner: 'bubbles' })
  }

  // ===== Toast =====
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  // ===== Se enruta a cualquier pagina disponible =====
  routerlink(url: string){
    return this.router.navigateByUrl(url);
  }

  // ===== Guarda un elemento en el localstorage =====
  saveInLocalStorage(key: string, value: any){
    return localStorage.setItem(key, JSON.stringify(value))
  }

  // ===== Optiene un elemento desde localstorage =====
  getFromLocalStorage(key: string){
    return JSON.parse(localStorage.getItem(key))
  }
}
