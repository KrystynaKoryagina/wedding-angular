import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
	{ path: '', component: AdminLayoutComponent, children: [
		{ path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
		{ path: 'dashboard', component: DashboardComponent }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }