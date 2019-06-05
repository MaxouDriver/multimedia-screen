import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule} from '@angular/material';


import { AppComponent } from './app.component';
import { ClockComponent } from './tile/clock/clock.component';
import { TileWallComponent } from './tile-wall/tile-wall.component';
import { TileComponent } from './tile/tile.component';
import { WeatherComponent } from './tile/weather/weather.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TileWallComponent,
    TileComponent,
    WeatherComponent,
    NotFoundComponent
  ],
  entryComponents: [ClockComponent, WeatherComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
