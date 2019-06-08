import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {
  imageUrls: string[] = [
    "https://i.pinimg.com/originals/13/11/38/131138fd1d83ed4e2f914d24ae28240c.jpg",
    "https://gierade.jdmstyle.pl/wp-content/uploads/2017/05/DMC-1170x600.png"
  ];
  constructor() { }

  ngOnInit() {
  }

}
