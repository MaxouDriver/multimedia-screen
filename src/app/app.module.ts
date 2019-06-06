import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule} from '@angular/material';
import { SlideshowModule } from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/tile/clock/clock.component';
import { TileWallComponent } from './components/tile-wall/tile-wall.component';
import { TileComponent } from './components/tile/tile.component';
import { WeatherComponent } from './components/tile/weather/weather.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GalleryComponent } from './components/tile/gallery/gallery.component';

import { ClockService } from './services/clock/clock.service';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TileWallComponent,
    TileComponent,
    WeatherComponent,
    NotFoundComponent,
    GalleryComponent
  ],
  entryComponents: [ClockComponent, WeatherComponent, NotFoundComponent, GalleryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatGridListModule,
    SlideshowModule
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
