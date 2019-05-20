import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propose',
  templateUrl: './propose.page.html',
  styleUrls: ['./propose.page.scss'],
})
export class ProposePage implements OnInit {

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
    this.presentAlert('Done', 'You have posted a course Offer');
    this.router.navigate(['/tabs/uploader']);
    }

   

    
}
