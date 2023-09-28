import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/website//home-page/home-page.component';
import { AboutComponent } from './pages/website//about/about.component';
import { NewsComponent } from './pages/website//news/news.component';
import { FaqComponent } from './pages/website//faq/faq.component';
import { ContactComponent } from './pages/website//contact/contact.component';
import { NotfoundComponent } from './pages/website//notfound/notfound.component';
import { LoginComponent } from './pages/auth/User/login/login.component';
import { RegistrationComponent } from './pages/auth/User/registration/registration.component';
import { DashboardComponent } from './pages/auth/Admin/dashboard/dashboard.component';
import { AddadminComponent } from './pages/auth/Admin/addadmin/addadmin.component';
import { ProductsComponent } from './pages/auth/Admin/products/products.component';
import { UsersComponent } from './pages/auth/Admin/users/users.component';
import { OrdersComponent } from './pages/auth/Admin/orders/orders.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about',component:AboutComponent},
  {path:'news',component:NewsComponent},
  {path:'faq',component:FaqComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'addamin',component:AddadminComponent},
  {path:'productsshow',component:ProductsComponent},
  {path:'usershow',component:UsersComponent},
  {path:'ordershow',component:OrdersComponent},
  {path:'register',component:RegistrationComponent},

  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
