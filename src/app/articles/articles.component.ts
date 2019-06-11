import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../mock-articles';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { Article } from '../article'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = ARTICLES;
  highest_paid_article: Article;


  constructor() { 

    this.highest_paid_article = this.articles[0]

  }

  ngOnInit() {

  }

  get_highest_paid() {

  
  }



}
