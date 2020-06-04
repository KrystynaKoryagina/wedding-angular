import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Observable } from 'rxjs';
import { Section } from '../shared/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-section',
  templateUrl: './offer-section.component.html',
  styleUrls: ['./offer-section.component.scss']
})
export class OfferSectionComponent implements OnInit {
  
  sectionData$: Observable<Section>;

  constructor(
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.sectionData$ = this.dataService.getSectionByType(this.router.url.slice(1));
  }

}
