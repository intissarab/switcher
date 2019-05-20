import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  firstname: string
  lastname: string
  birthday: Date
  username: string
  password: string
  cpassword: string

  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public userSer: UserService,
    public alertController: AlertController,
    public router: Router,
    public navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })

    await alert.present()
  }

  async Signup() {
    if(this.password !== this.cpassword) {
      this.presentAlert("Oups", "Passwords don't match");
      return;
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(this.username + '@univ-smb.fr', this.password)

      let user = {
        uid: res.user.uid,
        firstname: this.firstname,
        lastname: this.lastname,
        birthday: this.birthday,
        username: this.username,
        password: this.password,
        email: + this.username + '@univ-smb.fr'
      }
      this.afstore.doc(`users/${res.user.uid}`).set(user);

      this.userSer.setUser(user);

      this.presentAlert('Success', 'Welcome to Switcher You are registered!');
      this.router.navigate(['/tabs']);

    } catch(error) {
      this.presentAlert('Error', error.message)
      console.dir(error)
    }
  }

  GotoTerms(){
    this.navCtrl.navigateForward('terms');
  }

}