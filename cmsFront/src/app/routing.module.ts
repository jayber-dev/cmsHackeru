
import { Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { LoginComponent } from './components/loginComponents/login.component'
import { SignupComponent } from './components/signupComponents/signup.component'

export const routes:Routes =  [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
]