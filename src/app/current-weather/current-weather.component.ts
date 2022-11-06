import { Component, OnInit,Input } from '@angular/core';
import { IcurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() current: IcurrentWeather
  constructor() {
    this.current ={
      city: '',
      country: '',
      date: new Date(),
      image: '',
      temprature: 0,
      description: ''
    }
   }
  ngOnInit(): void {
  }
}
