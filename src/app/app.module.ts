import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {  Routes, RouterModule } from '@angular/router';
import { PlatosComponent } from './platos/platos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';


//servicios

import { PlatosService } from './platos.service';
import { DetallesPlatosComponent } from './detalles-platos/detalles-platos.component';

const rutas: Routes = [ 
  {path: 'platos',  component: PlatosComponent},
  {path: 'platos/:id',  component: DetallesPlatosComponent},  
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**',component: NotfoundComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PlatosComponent,
    NotfoundComponent,
    DetallesPlatosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [PlatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
