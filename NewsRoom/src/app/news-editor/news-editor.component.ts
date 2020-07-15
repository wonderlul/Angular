import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { NewsService } from "../news.service";
import { loremIpsum } from "lorem-ipsum";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.css"]
})
export class NewsEditorComponent implements OnInit {
  createdTitle: string;
  createdContent: string;
  createdImgUrl: string;

  getCreatedImgUrl = function(): string {
    return "https://picsum.photos/200/300/?random&t=" + new Date().getTime();
  };

  getCreatedContent = function(): string {
    return loremIpsum();
  };

  constructor(private newsService: NewsService) {}

  ngOnInit() {}

  addNews() {
    if (this.createdImgUrl && this.createdContent) {
      this.newsService.addItem(
        this.createdTitle,
        this.createdImgUrl,
        this.createdContent,
        0
      );
    } else if (this.createdImgUrl) {
      this.newsService.addItem(
        this.createdTitle,
        this.createdImgUrl,
        this.getCreatedContent(),
        0
      );
    } else if (this.createdContent) {
      this.newsService.addItem(
        this.createdTitle,
        this.getCreatedImgUrl(),
        this.createdContent,
        0
      );
    } else if (!this.createdContent && !this.createdImgUrl) {
      this.newsService.addItem(
        this.createdTitle,
        this.getCreatedImgUrl(),
        this.getCreatedContent(),
        0
      );
    }
    this.createdTitle = "";
    this.createdContent = "";
    this.createdImgUrl = "";
  }
}
