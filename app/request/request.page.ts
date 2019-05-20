import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  constructor( public router: Router, public alertController: AlertController) { }


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


  post() {
    this.presentAlert('Done', 'You have posted a course Request');
    this.router.navigate(['/tabs/uploader']);
    }

   
}
