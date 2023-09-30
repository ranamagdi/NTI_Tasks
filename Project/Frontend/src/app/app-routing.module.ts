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
import { canActivateGuard } from './guards/can-activate/can-activate.guard';
import { AddProductComponent } from './pages/auth/Admin/add-product/add-product.component';
import { ProfileComponent } from './pages/website/profile/profile.component';
import { canActivateChildGuard } from './guards/can-activate-child/can-activate-child.guard';
import { ShowSingleUserComponent } from './pages/auth/Admin/show-single-user/show-single-user.component';
import { ShowSingleProductComponent } from './pages/auth/Admin/show-single-product/show-single-product.component';
import { SingleProductEditComponent } from './pages/auth/Admin/single-product-edit/single-product-edit.component';
import { FamilyComponent } from './pages/website/categories/family/family.component';
import { EconomicComponent } from './pages/website/categories/economic/economic.component';
import { CookeryComponent } from './pages/website/categories/cookery/cookery.component';
import { UserOrderComponent } from './pages/website/user-order/user-order.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about',component:AboutComponent},
  {path:'news',component:NewsComponent},
  {path:'faq',component:FaqComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},

  {
    path: 'dashboard', canActivateChild: [canActivateChildGuard],
    children: [
      { path: '', component:DashboardComponent },
      {path:'addamin',component:AddadminComponent},
      {path:'productsshow',component:ProductsComponent},
      {path:'productsadd',component:AddProductComponent},
      {path:'usershow',component:UsersComponent},
      {path:'singleusershow/:id',component:ShowSingleUserComponent},
      {path:'singleproductshow/:id',component:ShowSingleProductComponent},
      {path:'singleproductedit/:id',component:SingleProductEditComponent},
      {path:'ordershow',component:OrdersComponent}

    ]

  },
  {path:'register',component:RegistrationComponent},
  {path:'profile',component:ProfileComponent, canActivate:[canActivateGuard]},
  {path:'family',component:FamilyComponent},
  {path:'economic',component:EconomicComponent},
  {path:'cookery',component:CookeryComponent},
  {path:'cart',component:UserOrderComponent, canActivate:[canActivateGuard]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
