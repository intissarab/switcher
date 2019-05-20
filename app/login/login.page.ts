import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
     public userSer: UserService,
      public router: Router,
      public alertController: AlertController,
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

  async login() {
    let $this = this;
    const { username, password } = this
    try {
      // kind of a hack. 
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@univ-smb.fr', password)

      if(res.user) {
        this.afstore.collection("users").doc(res.user.uid).ref
            .get().then(function(doc) {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    $this.userSer.setUser(doc.data());
                    $this.router.navigate(['/tabs'])
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });        
      }
    
    } catch(err) {
      console.log(err);
      this.presentAlert('Woops', 'Your password or username is not found');
    }
  }

  goto(){
    this.navCtrl.navigateForward('signup');
  }

}
