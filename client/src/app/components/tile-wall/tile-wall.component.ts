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
  edition: boolean = false;

  constructor(private socket: Socket) {
    this.socket.on("fullscreen", (value) => {
      this.openFullScreen(value.componentName);
    });

    this.socket.on("closefullscreen", () => {
      this.closeFullScreen();
    });

    this.socket.on("edition", () => {
      this.openEditionMode();
    });

    this.socket.on("closeedition", () => {
      this.closeEditionMode();
    });

    this.socket.on("swap", (value) => {
      this.swapComponents(value.componentNum1, value.componentNum2);
    });

    this.socket.on("resize", (value) => {
      this.resizeComponent(value.componentNum, value.cols, value.rows);
    });
  }

  resizeComponent(componentNum, newCols, newRows){
    if (this.edition &&
      componentNum >= 0 && componentNum < this.tiles.length) {
        var tempTiles = $.extend(true, [], this.previousState);

        tempTiles[componentNum].cols = newCols;
        tempTiles[componentNum].rows = newRows;

        this.tiles = tempTiles;
    }
  }

  swapComponents(componentNum1, componentNum2){
    if (this.edition &&
      componentNum1 >= 0 && componentNum1 < this.tiles.length &&
      componentNum2 >= 0 && componentNum2 < this.tiles.length) {

        var tempTiles = $.extend(true, [], this.previousState);
        var temp = tempTiles[componentNum1].name;
        tempTiles[componentNum1].name = tempTiles[componentNum2].name;
        tempTiles[componentNum2].name = temp;

        this.tiles = tempTiles;
    }
  }

  openEditionMode(){
    this.onModifications();
    this.edition = true;

    var tempTiles = $.extend(true, [], this.tiles);

    tempTiles.forEach((tile) => {
      tile.name = "edition";
    });

    this.tiles = tempTiles;
  }

  closeEditionMode(){
    if (this.edition) {
      this.revertModifications();
      this.edition = false;
    }
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
    if (this.fullscreen) {
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

