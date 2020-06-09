import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Section, SectionContent, SectionMeta } from 'src/app/shared/interfaces/interfaces';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Path } from 'src/environments/interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  section: Section; 
  getSubscribe: Subscription;
  updateSubscribe: Subscription;
  sectionType: Path = environment.sectionPath;

  isSuccess: boolean = false;
  isError: boolean = false;
  alertText: string;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getSectionData(); 
  }

  ngOnDestroy(): void {
    if (this.getSubscribe) this.getSubscribe.unsubscribe();
    if (this.updateSubscribe) this.updateSubscribe.unsubscribe();
  }

  getSectionData(): void {
    this.getSubscribe = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.dataService.getSectionByType(params['type']);
        })
      ).subscribe((data: Section) => {
        this.section = data;
      });
  }

  submit(data: Section) {

    const formData = {
      ...this.section,
      ...data
    }

    this.updateSubscribe = this.dataService.updateSection(formData, this.authService.token)
      .subscribe(
        () => {
          this.isSuccess = true;
          this.alertText = "Data updated!"
        },
        (error) => {
          this.isError = true;
          this.alertText = `Error: ${error}`
        },
        () => {
          setTimeout(() => {
            this.alertText = '';
          }, 3000);
        }
      )
  }

}
