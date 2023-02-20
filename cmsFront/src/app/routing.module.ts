
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
import { UsersConnectionsComponent } from './components/dashboardView/users-connections/connections.component'

export const routes:Routes =  [
    {path: '', component:AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'about', component:AboutCardComponent},
    {path: 'dashboard', component:DashboardComponent,canActivate:[authGuard],
        children:[
            {path: 'costumers', component:CostumersViewComponent,
                children:[
                    {path:'table/:from', component:UsersTableComponent}, // General data retrival table
                    {path:'folders/:from', component:UsersFoldersComponent}, // General data retrival folder
                    {path: 'connections', component:UsersConnectionsComponent}, // General data retrival by common groups
                    {path:'folders/:from/:id', component:CostumerCardComponent}, // Single registry Retrival
                    {path:'table/:from/:id', component:CostumerCardComponent}, // Singel registry retrival
                    {path:'searchResults/:from/:type/:query/:value', component:SearchResultsComponent}, // Search results in table view
                    {path:'addCostumer', component:AddEditCostumerComponent}, // Add costumer
                    {path:':from/editCostumer', component:AddEditCostumerComponent, } // Edit cstumer      
                ]},
            {path: 'contacts', component:ContactViewComponent,
                children:[
                    {path:'table/:from',component:UsersTableComponent}, // General data retrival
                    {path:'folders/:from',component:UsersFoldersComponent}, // General data retrival
                    {path: 'connections', component:UsersConnectionsComponent}, // General data retrival by common groups
                    {path:'folders/:from/:id', component:ContactCardComponent}, // Single registry Retrival folder           
                    {path:'table/:from/:id', component:ContactCardComponent}, // Single registry Retrival table
                    {path:'searchResults/:from/:type/:query/:value', component:SearchResultsComponent}, // Search results in table view
                    {path:'addContact', component:AddEditContactsComponent}, // Add contact
                    {path: ':from/editContact', component:AddEditContactsComponent} // Edit contact
                ]},
        ]},
    {path: '**', component:NotFoundComponent},
]