import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProfilComponent } from './profil/profil.component';
import { ProduitComponent } from './produit/produit.component';
import { ProfilServiceService } from './services/profil-service.service';
import { UserServiceService } from './services/user-service.service';
import { ProduitServiceService } from './services/produit-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfilComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProfilServiceService,
    UserServiceService,
    ProduitServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
