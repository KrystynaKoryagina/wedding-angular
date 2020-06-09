import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../shared/interfaces/interfaces';
import { DataService } from '../shared/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {

  sectionData$: Observable<Section>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sectionData$ = this.dataService.getSectionByType(environment.sectionPath.services);
  }
}
