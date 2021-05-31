import { Component, AfterViewInit} from '@angular/core';
import { StatsService } from 'src/app/services/stats/stats.service';

@Component({
  selector: 'app-stats-container',
  templateUrl: './stats-container.component.html',
  styleUrls: ['./stats-container.component.scss']
})
export class StatsContainerComponent implements AfterViewInit {
  statsData:any;
  public canvasWidth = 300;
  public needleValue = 65;
  public centralLabel = ''
  public name = 'CPU Utilization';
  public bottomLabel = '65'
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(61,204,91)', 'rgb(239,214,19)', 'rgb(255,84,84)'],
      arcDelimiters: [30,70],
      rangeLabel: ['0', '100'],
      needleStartValue: 0,
  }
  public statsLoaded = false;

  constructor(private statsServices:StatsService) { }

  ngAfterViewInit(){
    this.statsServices.getStatsStream().subscribe((data) => {
      this.processData(data);
    });
  }

  processData(data) {
    this.statsData = data;
    this.needleValue = this.bottomLabel = data.cpuUtilization;
    this.statsLoaded = true;
  }

  public getStatsData() {
    this.statsLoaded = false;
    this.statsServices.getStatsData().subscribe((data) => {
      this.processData(data);
    });
  }
}
