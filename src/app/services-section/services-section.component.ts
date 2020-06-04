import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../shared/interfaces/interfaces';
import { DataService } from '../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {

  sectionData$: Observable<Section>;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sectionData$ = this.dataService.getSectionByType(this.router.url.slice(1));
  }
}
