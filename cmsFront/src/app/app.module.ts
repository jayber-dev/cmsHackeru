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
import { UtilService } from './services/utilService/util.service';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { SidenavComponent } from './components/dashboardView/sidenav/sidenav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboardView/dashboard.component';
import { ContactViewComponent } from './components/dashboardView/contact-view/contact-view.component';
import { CostumersViewComponent } from './components/dashboardView/costumers-view/costumers-view.component';
import { UsersTableComponent } from './components/dashboardView/users-table/users-table.component';
import { UsersFoldersComponent } from './components/dashboardView/users-folders/users-folders.component';
import { CostumerCardComponent } from './components/dashboardView/costumers-view/costumer-card/costumer-card.component';
import { SearchResultsComponent } from './components/dashboardView/search-results/search-results.component';
import { MiniNavComponent } from './components/dashboardView/mini-nav/mini-nav.component';
import { SubMenuComponent } from './components/dashboardView/sub-menu/sub-menu.component';
import { ContactCardComponent } from './components/dashboardView/contact-view/contact-card/contact-card.component';
import { AgeCalc } from './pipes/ageCalc.pipe';
import { AddEditCostumerComponent } from './components/dashboardView/addEdit-costumer/add-costumer.component';
import { AddEditContactsComponent } from './components/dashboardView/addEdit-contacts/add-contacts.component';
import { httpService } from './services/httpService/http.service';
import { UsersConnectionsComponent } from './components/dashboardView/users-connections/connections.component';
import { GoogleLoginComponent } from './components/loginComponents/google-login/google-login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { CookieService } from 'ngx-cookie-service';


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
    AgeCalc,
    AddEditCostumerComponent,
    AddEditContactsComponent,
    UsersConnectionsComponent,
    GoogleLoginComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UtilService,httpService,CookieService,{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '837830033253-b14a2dce14ts6fsb6hjk305in7kqoqb3.apps.googleusercontent.com',
          )
        },
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
