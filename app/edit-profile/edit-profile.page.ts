import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { BinaryOperator } from '@angular/compiler';
import {Http} from '@angular/http';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  imageURL: string
  phone: string
  ine: string
  firstname: string
  lastname: string
  birthday: Date
  username: string
  password: string
  cpassword: string
  bio: string
  user:any

  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public userSer: UserService,
    public alertController: AlertController,
    public router: Router,
    public navCtrl: NavController,
  
     public http: Http
  ) { 
    if(!this.userSer.isAuthenticated)
      this.navCtrl.navigateRoot('/login')

    this.user = this.userSer.user;

  }

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
  
  createPost(){
    const image= this.imageURL
   
   
   this.afstore.doc('users/${this.user.getUID()}').update({
  posts: firestore.FieldValue.arrayUnion({
    image
       
   })
  })
  }

  fileChanged(event) {
    const files = event.target.files
   
  const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY','16ee8f767d422029a8b8' )

   this.http.post('https://upload.uploadcare.com/base/', data)
   .subscribe(event => {

     console.log(event)
     this.imageURL = event.json().file

 })
 }







  edit(){

    let userProfile = {
      bio: this.bio,
      phone: this.phone,
      ine: this.ine,

      // firstname: this.firstname,
      // lastname: this.lastname
      // birthday: this.birthday,
      // username: this.username,
      // password: this.password,
      // email: + this.username + '@univ-smb.fr'
    }
   
    try{
      
      this.afstore.collection("users").doc(this.userSer.user.uid).ref.update(userProfile);
      this.presentAlert('Success', 'profile edited')
      this.router.navigate(['/tabs/profile'])

    } catch(error) {
      console.dir(error)
    }
  }
}
  
