import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WelcomeComponent } from './components/Home/welcome/welcome.component';
import { CarouselComponent } from './components/Home/carousel/carousel.component';
import { HomePageComponent } from './pages/website/home-page/home-page.component';
import { AdvertisingComponent } from './components/Home/advertising/advertising.component';
import { AboutComponent } from './pages/website/about/about.component';
import { NewsComponent } from './pages/website/news/news.component';
import { FaqComponent } from './pages/website/faq/faq.component';
import { ContactComponent } from './pages/website/contact/contact.component';
import { NotfoundComponent } from './pages/website/notfound/notfound.component';
import { RegistrationComponent } from './pages/auth/User/registration/registration.component';
import { LoginComponent } from './pages/auth/User/login/login.component';
import { DashboardComponent } from './pages/auth/Admin/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptor/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    CarouselComponent,
    HomePageComponent,
    AdvertisingComponent,
    AboutComponent,
    NewsComponent,
    FaqComponent,
    ContactComponent,
    NotfoundComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true

    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
