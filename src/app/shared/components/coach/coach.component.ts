import { Component, OnInit, Input } from '@angular/core';
import { SectionContent } from '../../interfaces/interfaces';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {

  @Input() coach: SectionContent;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
