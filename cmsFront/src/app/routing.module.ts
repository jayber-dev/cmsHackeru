
import { Routes} from '@angular/router'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { LoginComponent } from './components/loginComponents/login.component'
import { SignupComponent } from './components/signupComponents/signup.component'
import { AboutCardComponent } from './components/about-card/about-card.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { DashboardComponent } from './components/dashboardView/dashboard.component'
import { ContactViewComponent } from './components/dashboardView/contact-view/contact-view.component'
import { CostumersViewComponent } from './components/dashboardView/costumers-view/costumers-view.component'
import { UsersTableComponent } from './components/dashboardView/users-table/users-table.component'
import { UsersFoldersComponent } from './components/dashboardView/users-folders/users-folders.component'
import { CostumerCardComponent } from './components/dashboardView/costumers-view/costumer-card/costumer-card.component'
import { SearchResultsComponent } from './components/dashboardView/search-results/search-results.component'
import { ContactCardComponent } from './components/dashboardView/contact-view/contact-card/contact-card.component'
import { AddCostumerComponent } from './components/dashboardView/add-costumer/add-costumer.component'
import { AddContactsComponent } from './components/dashboardView/add-contacts/add-contacts.component'

export const routes:Routes =  [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'about', component:AboutCardComponent},
    {path: 'dashboard', component:DashboardComponent,
        children:[
            {path: 'costumers', component:CostumersViewComponent,
                children:[
                    {path:'table', component:UsersTableComponent},
                    {path:'folders', component:UsersFoldersComponent},
                    {path:'folders/:id', component:CostumerCardComponent},            
                    {path:'table/:id', component:CostumerCardComponent},
                    {path:'searchResults/:type/:query', component:SearchResultsComponent} ,
                    {path:'addCostumer', component:AddCostumerComponent},         
                ]},
            {path: 'contacts', component:ContactViewComponent,
                children:[
                    {path:'table',component:UsersTableComponent},
                    {path:'folders',component:UsersFoldersComponent},
                    {path:'folders/:id', component:ContactCardComponent},            
                    {path:'table/:id', component:ContactCardComponent},
                    {path:'searchResults/:type/:query', component:SearchResultsComponent},
                    {path:'addContact', component:AddContactsComponent}
                ]}
        ]},
    {path: '**', component:NotFoundComponent},
]