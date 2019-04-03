import { Component, OnInit } from '@angular/core';
import { ARTICLES} from '../mock-articles';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = ARTICLES;

  constructor() { }

  ngOnInit() {
  }

}
