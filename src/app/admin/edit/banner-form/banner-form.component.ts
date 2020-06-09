import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from 'src/app/shared/interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.scss']
})
export class BannerFormComponent implements OnInit {

  form: FormGroup;

  @Input() section: Section;
  @Output() onSubmit: EventEmitter<Section> = new EventEmitter();
 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      meta: this.fb.group({
        title: [this.section.meta.title, Validators.required],
        description: [this.section.meta.description, Validators.required],
        location: [this.section.meta.location, Validators.required],
        heroImage: [this.section.meta.heroImage, Validators.required]
      }),
      action: this.fb.group({
        title: [this.section.action.title, Validators.required],
        url: [this.section.action.url, Validators.required]
      })
    });
  }

  submit(): void {
    if (this.form.invalid) return;
    
    const formData = this.form.value;
    this.onSubmit.emit(formData);
  }
}
