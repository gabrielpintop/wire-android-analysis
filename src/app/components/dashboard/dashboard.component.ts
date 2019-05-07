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

  public connectivityImplementations = 4;

  public connectivityImplementation = 1;

  public storageImplementations = 4;

  public storageImplementation = 1;

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

  changeConnectivity(pos) {
    this.connectivityImplementation = pos;
  }

  changeStorage(pos) {
    this.storageImplementation = pos;
  }
}
