import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    AngularFireModule.initializeApp(
      {
        apiKey: 'AIzaSyCqUos_d1rRFGk0wD5wtHxalmZXqcCPNZc',
        authDomain: 'example-bookshelf-app.firebaseapp.com',
        databaseURL: 'https://example-bookshelf-app.firebaseio.com',
        projectId: 'example-bookshelf-app',
        storageBucket: '',
        messagingSenderId: '6641015644',
        appId: '1:6641015644:web:be18576ec192201b'
      }
    ),
    MatProgressSpinnerModule
  ],
  providers: [AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
