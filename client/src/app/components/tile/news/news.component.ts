import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  news: News[] = [
    new News("Premiere news", new Date(), "Contenu de la premiere news"),
    new News("Deuxieme news", new Date(), "Contenu de la deuxieme news")
  ];
  constructor() { }

  ngOnInit() {
  }

}
