import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Section } from 'src/app/shared/interfaces/interfaces';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Path } from 'src/environments/interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  form: FormGroup;
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSectionData(); 
  }

  ngOnDestroy(): void {
    if (this.getSubscribe) this.getSubscribe.unsubscribe();
    if (this.updateSubscribe) this.updateSubscribe.unsubscribe();
  }

  get contentGroups(): FormArray {
    return this.form.get('content') as FormArray;
  }

  private createMetaForm() {
    let metaForm = {};
    for (let item in this.section.meta) {
      metaForm[item] = new FormControl(this.section.meta[item], [Validators.required]);
    }
    return metaForm;
  }

  private createActionForm() {
    let actionForm = {};

    if (Object.keys(this.section.action).length) {
      for (let item in this.section.action) {
        actionForm[item] = new FormControl(this.section.action[item], [Validators.required]);
      }
    }
    return actionForm;    
  }

  private createContentForm() {
    const contentForm = [];

    if (this.section.content.length) {
      
      this.section.content.forEach(item => {
        const contentFormGroup: FormGroup = new FormGroup({});

        for (let key in item) {
          contentFormGroup.addControl(key, new FormControl(item[key], [Validators.required]));
        }

        contentForm.push(contentFormGroup);
      });
    }

    return contentForm;
  }

  getSectionData(): void {
    this.getSubscribe = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.dataService.getSectionByType(params['type']);
        })
      ).subscribe((data: Section) => {
        this.section = data;

        this.form = new FormGroup({
          meta: new FormGroup(this.createMetaForm()),
          content: new FormArray(this.createContentForm()),
          action: new FormGroup(this.createActionForm())
        });
  });
}

  submit() {
    const formData = {
      ...this.section,
      ...this.form.value
    }

    console.log(this.section);
    console.log(formData);

    // this.updateSubscribe = this.dataService.updateSection(formData, this.authService.token)
    //   .subscribe(
    //     () => {
    //       this.isSuccess = true;
    //       this.alertText = "Section data updated!"
    //     },
    //     () => {
    //       this.isError = true;
    //       this.alertText = "Error!!!"
    //     },
    //     () => {
    //       setTimeout(() => {
    //         this.alertText = '';
    //       }, 5000);
    //     }
    //   )
  }
}
