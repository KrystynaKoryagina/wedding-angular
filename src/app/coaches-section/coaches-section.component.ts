import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Section } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-coaches-section',
  templateUrl: './coaches-section.component.html',
  styleUrls: ['./coaches-section.component.scss']
})
export class CoachesSectionComponent implements OnInit {

  sectionData$: Observable<Section>;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sectionData$ = this.dataService.getSectionByType(this.router.url.slice(1));
  }
}
