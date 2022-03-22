import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  PreloadAllModules,
  RouteReuseStrategy,
  RouterModule,
} from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: "",
          redirectTo: "home",
          pathMatch: "full",
        },
        {
          path: "home",
          loadChildren: () =>
            import("./home/home.module").then((m) => m.HomePageModule),
        },
      ],
      {
        preloadingStrategy: PreloadAllModules,
        relativeLinkResolution: "legacy",
      }
    ),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
