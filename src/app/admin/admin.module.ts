import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/modules/shared.module';

@NgModule({
	declarations: [
		AdminLayoutComponent,
		DashboardComponent,
		EditComponent
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		SharedModule
	],
	exports: []
})
export class AdminModule {}