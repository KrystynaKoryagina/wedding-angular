import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
	{ path: '', component: AdminLayoutComponent, children: [
		{ path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
		{ path: 'dashboard', component: DashboardComponent },
		{ path: 'edit/:type', component: EditComponent },
	]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }