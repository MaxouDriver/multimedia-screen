import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit, Input, AfterViewInit } from '@angular/core';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { EditionComponent } from './edition/edition.component';

interface MyPost {
  nb: number;
} 

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.sass']
})
export class TileComponent implements OnInit, AfterViewInit {
  @ViewChild('content', {read: ViewContainerRef, static : false}) _container: ViewContainerRef;
  @Input() name: string;
  @Input() nb: number;

  constructor(private _resolver: ComponentFactoryResolver) { 

  }

  ngOnInit(){
    
  }

  ngAfterViewInit() {
    var cmpFactory;

    switch(this.name){
      case "edition":
        cmpFactory = this._resolver.resolveComponentFactory(EditionComponent);
        break;
      case "clock":
        cmpFactory = this._resolver.resolveComponentFactory(ClockComponent);
        break;
      case "weather":
        cmpFactory = this._resolver.resolveComponentFactory(WeatherComponent);
        break;
      case "gallery":
        cmpFactory = this._resolver.resolveComponentFactory(GalleryComponent);
        break;
      case "news":
        cmpFactory = this._resolver.resolveComponentFactory(NewsComponent);
        break;
      default:
        cmpFactory = this._resolver.resolveComponentFactory(NotFoundComponent);
        break;
    }
    var ref = this._container.createComponent(cmpFactory);
    
    let myPost: MyPost = <MyPost>ref.instance;
    myPost.nb = this.nb;
    
    ref.changeDetectorRef.detectChanges();
  }
}
