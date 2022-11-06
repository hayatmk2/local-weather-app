import { Component } from '@angular/core';
import { IcurrentWeather } from './icurrent-weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-weather-app';

  currentWeather: IcurrentWeather = {      
  city: '',
  country: '',
  date: new Date(),
  image: '',
  temprature: 0,
  description: ''

  }
  constructor(private weatherService: WeatherService){}

  doSearch(searchValue: string){
    const userInput = searchValue.split(',').map(s => s.trim())

    this.weatherService.getCurrentWeather(userInput[0], 
      userInput.length > 1 ? userInput[1] : undefined).subscribe(data => 
      this.currentWeather = data)
  }
}
