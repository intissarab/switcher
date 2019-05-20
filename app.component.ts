import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  gotoset(){
    this.navCtrl.navigateForward('settings');
  }
  gotoinv(){
    this.navCtrl.navigateForward('invite');
  }
  gotohelp(){
    this.navCtrl.navigateForward('help');
  }
  gotoaboutt(){
    this.navCtrl.navigateForward('about');
  }
}
