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
import { SidenavComponent } from './components/dashboardView/sidenav/sidenav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CostumerService } from './services/costumersService/cosutmers.service';
import { DashboardComponent } from './components/dashboardView/dashboard.component';
import { ContactViewComponent } from './components/dashboardView/contact-view/contact-view.component';
import { CostumersViewComponent } from './components/dashboardView/costumers-view/costumers-view.component';
import { UsersTableComponent } from './components/dashboardView/users-table/users-table.component';
import { UsersFoldersComponent } from './components/dashboardView/users-folders/users-folders.component';
import { CostumerCardComponent } from './components/dashboardView/costumers-view/costumer-card/costumer-card.component';
import { SearchResultsComponent } from './components/dashboardView/search-results/search-results.component';
import { MiniNavComponent } from './components/dashboardView/mini-nav/mini-nav.component';
import { SubMenuComponent } from './components/dashboardView/sub-menu/sub-menu.component';
import { ContactService } from './services/contactService/contact.service';
import { ContactCardComponent } from './components/dashboardView/contact-view/contact-card/contact-card.component';

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
    DashboardComponent,
    ContactViewComponent,
    CostumersViewComponent,
    UsersTableComponent,
    UsersFoldersComponent,
    CostumerCardComponent,
    SearchResultsComponent,
    MiniNavComponent,
    SubMenuComponent,
    ContactCardComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService,UtilService,CostumerService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
