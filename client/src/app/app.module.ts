import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatCardModule } from '@angular/material';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/tile/clock/clock.component';
import { TileWallComponent } from './components/tile-wall/tile-wall.component';
import { TileComponent } from './components/tile/tile.component';
import { WeatherComponent } from './components/tile/weather/weather.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GalleryComponent } from './components/tile/gallery/gallery.component';
import { NewsComponent } from './components/tile/news/news.component';

import { ClockService } from './services/clock/clock.service';

import * as $ from 'jquery';

const config: SocketIoConfig = { url: 'http://localhost:1234', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TileWallComponent,
    TileComponent,
    WeatherComponent,
    NotFoundComponent,
    GalleryComponent,
    NewsComponent
  ],
  entryComponents: [ClockComponent, WeatherComponent, NotFoundComponent, GalleryComponent, NewsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatCardModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
