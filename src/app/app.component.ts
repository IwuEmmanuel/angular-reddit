import { Component } from '@angular/core';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  newtitle: HTMLInputElement;
  newlink: HTMLInputElement;

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];

  }

  // sorts the atricles from highest to lowest using the vote count.
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }


  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    // adding the articles in a sorted manner
    this.sortedArticles().push(new Article(title.value, link.value, 0));
    title.value = "";
    link.value = "";
    return false;
  }
}
