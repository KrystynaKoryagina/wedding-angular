import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Section } from 'src/app/shared/interfaces/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{

  sections: Section[] = [];
  getSubscribe: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllSections();
  }

  ngOnDestroy(): void {
    if (this.getSubscribe) this.getSubscribe.unsubscribe();    
  }
 
  getAllSections(): void {
    this.getSubscribe = this.dataService.getAllSection()
      .subscribe((data) => {
        this.sections = data;
      })
  }

}
