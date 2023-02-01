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
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signupComponents/signup.component';
import { SignupFormComponent } from './components/signupComponents/signup-form/signup-form.component';
import { AuthService } from './services/authService/auth.service';
import { UtilService } from './services/utilService/util.service';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CostumerDetailsComponent } from './components/costumer-details/costumer-details.component';
import { CostumerService } from './services/costumersService/cosutmers.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LoginFormComponent,
    SignupComponent,
    SignupFormComponent,
    AboutCardComponent,
    SidenavComponent,
    NotFoundComponent,
    CostumerDetailsComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService,UtilService,CostumerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
