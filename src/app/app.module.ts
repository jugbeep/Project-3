import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthService } from './auth.service';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';


export const firebaseConfig = {
  apiKey: "AIzaSyAIzdNMkeONS9GR-2Ib12rmgaj42qe7plI",
  authDomain: "login-angular-5.firebaseapp.com",
  databaseURL: "https://login-angular-5.firebaseio.com",
  projectId: "login-angular-5",
  storageBucket: "",
  messagingSenderId: "640818277665"
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],

  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
