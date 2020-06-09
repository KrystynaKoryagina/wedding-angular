import { Component, OnInit, Input } from '@angular/core';
import { SectionContent } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() service: SectionContent;

  constructor() { }

  ngOnInit(): void {}

}
