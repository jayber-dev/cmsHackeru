import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { routes } from './routing.module';
import { LoginComponent } from './components/loginComponents/login.component';
import { LoginFormComponent } from './components/loginComponents/login-form/login-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from './services/loginService/login.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signupComponents/signup.component';
import { SignupFormComponent } from './components/signupComponents/signup-form/signup-form.component';
import { signupService } from './services/registerService/signup.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LoginFormComponent,
    SignupComponent,
    SignupFormComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [LoginService,signupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
