import { Component, AfterViewInit} from '@angular/core';
import { StatsService } from 'src/app/services/stats/stats.service';

@Component({
  selector: 'app-stats-container',
  templateUrl: './stats-container.component.html',
  styleUrls: ['./stats-container.component.scss']
})
export class StatsContainerComponent implements AfterViewInit {
  statsData:any;
  constructor(private statsServices:StatsService) { }

  ngAfterViewInit(){
    console.log('Called Stats Service');
    this.statsServices.getStatsStream().subscribe((data) => {
      console.log('Data is ', data);
      this.statsData = data
    });
  }
}
