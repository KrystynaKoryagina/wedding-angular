import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { OfferSectionComponent } from './offer-section/offer-section.component';
import { CoachesSectionComponent } from './coaches-section/coaches-section.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', redirectTo: '/banner', pathMatch: 'full' },
    { path: 'banner', component: BannerSectionComponent },
    { path: 'services', component: ServicesSectionComponent },
    { path: 'offer', component: OfferSectionComponent },
    { path: 'coaches', component: CoachesSectionComponent }
  ]},
  { path: 'admin', loadChildren: () => import ('./admin/admin.module').then(mod => mod.AdminModule ), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
