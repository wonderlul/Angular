import { Component, OnInit } from "@angular/core";
import { NewsData } from "../news-data";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit {
  private news: NewsData[];
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    //ngOnInit odpowiada temu, co nam się robi przy załadowaniu strony
    this.loadNews();
    this.newsService.onChange.subscribe(() => this.loadNews()); //nasłuchuje "emita", sygnału, że coś się wydarzyło / zmieniło. Jak coś się stanie - wywołaj loadNews()
  }

  loadNews() {
    // this.news = [];

    this.news = this.newsService.getNewsList();
  }
}
