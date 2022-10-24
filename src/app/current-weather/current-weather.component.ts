import { Component, OnInit } from '@angular/core';
import { IcurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: IcurrentWeather

  constructor() {
    this.current ={
      city: 'Renton',
      country: 'US',
      date: new Date(),
      image: '',
      temprature: 45,
      description: 'cloudy'
    }
   }

  ngOnInit(): void {
  }

}
