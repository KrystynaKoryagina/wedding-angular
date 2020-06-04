import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { OfferSectionComponent } from './offer-section/offer-section.component';
import { CoachesSectionComponent } from './coaches-section/coaches-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { HttpClientModule } from '@angular/common/http';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';
import { ServiceComponent } from './shared/components/service/service.component';
import { CoachComponent } from './shared/components/coach/coach.component';
import { ModalComponent } from './shared/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NavigationComponent,
    BannerSectionComponent,
    OfferSectionComponent,
    CoachesSectionComponent,
    ServicesSectionComponent,
    PreloaderComponent,
    ServiceComponent,
    CoachComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
