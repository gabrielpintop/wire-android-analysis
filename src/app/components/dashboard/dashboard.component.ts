import { Component, OnInit } from '@angular/core';
import { ScraperService } from 'src/app/services/scraper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public appInfo;

  public loading = true;

  public showResume = false;

  constructor(private scraper: ScraperService) {}

  ngOnInit() {
    this.scraper
      .getAppData()
      .then(data => {
        this.appInfo = data;
        console.log(data);

        this.loading = false;
      })
      .catch(err => {
        alert(err);
        this.loading = false;
      });
  }
}
