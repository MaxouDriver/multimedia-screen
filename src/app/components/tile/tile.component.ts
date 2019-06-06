import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit, Input, AfterViewInit } from '@angular/core';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.sass']
})
export class TileComponent implements OnInit, AfterViewInit {
  @ViewChild('content', {read: ViewContainerRef, static : false}) _container: ViewContainerRef;
  @Input() name: string;

  constructor(private _resolver: ComponentFactoryResolver) { 

  }

  ngOnInit(){
    
  }

  ngAfterViewInit() {
    var cmpFactory;

    switch(this.name){
      case "clock":
        cmpFactory = this._resolver.resolveComponentFactory(ClockComponent);
        break;
      case "weather":
        cmpFactory = this._resolver.resolveComponentFactory(NotFoundComponent);
        break;
      case "gallery":
        cmpFactory = this._resolver.resolveComponentFactory(NotFoundComponent);
        break;
      default:
        cmpFactory = this._resolver.resolveComponentFactory(NotFoundComponent);
        break;
    }
    const ref = this._container.createComponent(cmpFactory);
    ref.changeDetectorRef.detectChanges();
  }
}
