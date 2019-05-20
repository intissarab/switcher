import { Component, OnInit } from '@angular/core';

 
 
import { UserService } from '../user.service';
import { NavController } from '@ionic/angular';
// import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';


import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 

  // username: string = ""
  // password: string = ""

  user:any

   
  constructor(
    public userSer: UserService,
    public navCtrl: NavController,
    public menu: MenuController,

    

     
    // public afAuth: AngularFireAuth,
    // public alertController: AlertController,
    // public router: Router,
     ) {

      this.user = this.userSer.user;
    
   }

  ngOnInit() {
  }

  
  // async presentAlert(title: string, content: string) {
  //   const alert = await this.alertController.create({
  //     header: title,
  //     message: content,
  //     buttons: ['OK']
  //   })

  //   await alert.present()
  // }

openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  gotoEdit(){
    this.navCtrl.navigateForward('edit-profile');
  }

  
    
    //end
  // showUser(){
  //   this.username.valueOf();
  // }
}