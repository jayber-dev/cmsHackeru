
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
import { AddEditCostumerComponent } from './components/dashboardView/addEdit-costumer/add-costumer.component'
import { AddEditContactsComponent } from './components/dashboardView/addEdit-contacts/add-contacts.component'
import { authGuard } from './gurads/auth.guard'

export const routes:Routes =  [
    {path: '', component:AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'about', component:AboutCardComponent},
    {path: 'dashboard', component:DashboardComponent,canActivate:[authGuard],
        children:[
            {path: 'costumers', component:CostumersViewComponent,
                children:[
                    {path:'table/:from', component:UsersTableComponent},
                    {path:'folders/:from', component:UsersFoldersComponent},
                    {path:'folders/:from/:id', component:CostumerCardComponent},            
                    {path:'table/:from/:id', component:CostumerCardComponent},
                    {path:'searchResults/:from/:type/:query/:value', component:SearchResultsComponent} ,
                    {path:'addCostumer', component:AddEditCostumerComponent},  
                    {path:':from/editCostumer', component:AddEditCostumerComponent, }       
                ]},
            {path: 'contacts', component:ContactViewComponent,
                children:[
                    {path:'table/:from',component:UsersTableComponent},
                    {path:'folders/:from',component:UsersFoldersComponent},
                    {path:'folders/:from/:id', component:ContactCardComponent},            
                    {path:'table/:from/:id', component:ContactCardComponent},
                    {path:'searchResults/:from/:type/:query/:value', component:SearchResultsComponent},
                    {path:'addContact', component:AddEditContactsComponent},
                    {path: ':from/editContact', component:AddEditContactsComponent}
                ]}
        ]},
    {path: '**', component:NotFoundComponent},
]