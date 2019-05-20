import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  user:any;

  constructor(public userSer: UserService,
              public navCtrl: NavController,
             ) {

    this.user = this.userSer.user;
    console.log(this.userSer);
    

  }

  ngOnInit() {
  }

  
  gotohome(){
    this.navCtrl.navigateForward('feed');
  }
  gotomyco(){
    this.navCtrl.navigateForward('mycrouses');
  }
  gotomyreq(){
    this.navCtrl.navigateForward('myrequests');
  }
  

 
  
}


