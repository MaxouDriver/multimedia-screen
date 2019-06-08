import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  name: string;
}

@Component({
  selector: 'app-tile-wall',
  templateUrl: './tile-wall.component.html',
  styleUrls: ['./tile-wall.component.sass']
})
export class TileWallComponent implements OnInit {
  tiles: Tile[] = [
    {name: "clock", cols: 2, rows: 1, color: 'lightpink'},
    {name: "weather", cols: 1, rows: 1, color: '#DDBDF1'},
    {name: "news", cols: 1, rows: 2, color: 'lightgreen'},
    {name: "gallery", cols: 3, rows: 1, color: 'lightblue'}
  ];
  previousState: Tile[] = undefined; 
  fullscreen: boolean = false;

  constructor(private socket: Socket) {
    this.socket.on("fullscreen", (value) => {
      this.openFullScreen(value.componentName);
    });

    this.socket.on("closefullscreen", () => {
      this.closeFullScreen();
    });
  }

  openFullScreen(componentName){
    this.onModifications();

    var newTiles = [];
    
    this.tiles.forEach((tile, index) => {
      if (tile.name == componentName) {
        this.fullscreen = true;
        tile.cols = 4;
        tile.rows = 2;
        newTiles.push(tile);
      } 
    });

    this.tiles = $.extend(true, [], newTiles);
  }

  closeFullScreen(){
    if (this.fullscreen == true) {
      this.revertModifications();
      this.fullscreen = false;
    }
  }

  onModifications(){
    if (!this.fullscreen) {
      this.previousState = $.extend(true, [], this.tiles);
    }
  }

  revertModifications(){
    this.tiles = $.extend(true, [], this.previousState);
  }

  ngOnInit() {

  }
}

