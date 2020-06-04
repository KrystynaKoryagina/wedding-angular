import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	declarations: [
		AdminLayoutComponent,
		DashboardComponent
	],
	imports: [
		CommonModule,
		AdminRoutingModule
	],
	exports: []
})
export class AdminModule {

}