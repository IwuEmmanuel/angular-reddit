import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() {
    
  }

  voteUp(): any {

    this.article.voteUp();
    return false;

  }

  voteDown(): any {

    this.article.voteDown();
    return false;

  }

  ngOnInit(): void {
  }

}
