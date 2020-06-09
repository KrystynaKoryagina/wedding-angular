import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Observable } from 'rxjs';
import { Section } from '../shared/interfaces/interfaces';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-coaches-section',
  templateUrl: './coaches-section.component.html',
  styleUrls: ['./coaches-section.component.scss']
})
export class CoachesSectionComponent implements OnInit {

  sectionData$: Observable<Section>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sectionData$ = this.dataService.getSectionByType(environment.sectionPath.coaches);
  }
}
