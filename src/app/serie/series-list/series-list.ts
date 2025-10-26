import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSeries } from '../dataSeries';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.html',
  styleUrl: './series-list.css'
})
export class SeriesList implements OnInit {
  series: Array<Serie> = [];
  constructor(private serieService: SerieService) {}

  getSeriesList() {
    this.serieService.getSeries().subscribe((series) => {
    this.series = series;
    });
  }

  ngOnInit() {
    this.getSeriesList();
  }
}
