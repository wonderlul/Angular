import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { NewsData } from "../news-data";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.css"]
})
export class NewsItemComponent {
  @Input()
  public news: NewsData; //input to odpowiednik propsa - parent rozmawia z childem

  @Input()
  public index: number;

  constructor(private newsService: NewsService) {}

  private newsList: NewsData[];

  up() {
    this.newsService.moveUp(this.index);
  }
  down() {
    this.newsService.moveDown(this.index);
  }

  remove() {
    this.newsService.removeItem(this.index);
  }
}
