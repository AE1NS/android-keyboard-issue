import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@capacitor/splash-screen";

@Component({
  selector: "app-root",
  template: "<ion-app><ion-router-outlet></ion-router-outlet></ion-app>",
})
export class AppComponent {
  constructor(private _platform: Platform) {
    this._platform.ready().then(() => {
      SplashScreen.hide();
    });
  }
}
