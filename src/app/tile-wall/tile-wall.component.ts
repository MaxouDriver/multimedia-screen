import { Component, OnInit } from '@angular/core';

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
    {name: "gg", cols: 1, rows: 2, color: 'lightgreen'},
    {name: "ee", cols: 3, rows: 1, color: 'lightblue'},
  ];
  constructor() {

  }

  ngOnInit() {

  }
}

