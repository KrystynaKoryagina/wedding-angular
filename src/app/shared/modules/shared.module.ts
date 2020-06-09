import { NgModule } from "@angular/core";
import { PreloaderComponent } from '../components/preloader/preloader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		PreloaderComponent,
	],
	imports: [
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		PreloaderComponent,
		FormsModule,
		ReactiveFormsModule
	]
})
export class SharedModule {}