import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { user } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc} from '@angular/fire/firestore';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth =  inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsSvc = inject(UtilsService);

  // ========================= Autenticación ====================
  getAuth(){
    return getAuth();
  }

  // ===== To Access =====
  signIn(user:user) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // ===== Create User =====
  signUp(user:user) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // ===== Update User =====
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, {displayName})
  }

  // ===== Restore Password =====
  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  // ===== Sign Off =====
  signOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerlink('/auth');
  }

  // =============== Data Base ===============

  // ===== Set Up a Document =====
  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(), path), data);
  }

  // ===== Get a Document =====
  async getDocument(path: string){
    return (await getDoc(doc(getFirestore(), path))).data();
  }
}
