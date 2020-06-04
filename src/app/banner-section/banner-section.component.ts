import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Observable } from 'rxjs';
import { Section } from '../shared/interfaces/interfaces';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent implements OnInit {

  sectionData$: Observable<Section>;

  constructor(
    private dataService: DataService,
    private router: Router
    // private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sectionData$ = this.dataService.getSectionByType(this.router.url.slice(1));


    // this.sectionData$ = this.route.params
    //   .pipe(switchMap((params: Params) => {
    //     return this.dataService.getSectionByType(params['type'])
    //   }))
  }
}
