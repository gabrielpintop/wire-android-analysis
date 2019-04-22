import { Component, OnInit } from '@angular/core';
import { ScraperService } from 'src/app/services/scraper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private scraper: ScraperService) {}

  ngOnInit() {
    this.scraper.getAppData();
  }
}
