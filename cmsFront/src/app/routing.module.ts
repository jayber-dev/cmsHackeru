
import { Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { LoginComponent } from './components/loginComponents/login.component'
import { SignupComponent } from './components/signupComponents/signup.component'
import { AboutCardComponent } from './components/about-card/about-card.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { CostumerDetailsComponent } from './components/costumer-details/costumer-details.component'

export const routes:Routes =  [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'about', component:AboutCardComponent},
    {path: 'costumers', component:CostumerDetailsComponent},
    {path: '*', component:NotFoundComponent},
]