import { Injectable } from "@angular/core";
import { NewsData } from "./news-data";
import { EventEmitter } from "@angular/core";
import { loremIpsum } from "lorem-ipsum";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  public onChange = new EventEmitter(); //to + linia "this.onChange.emit" - emituje zdarzenie, informuje dany komponent, że coś się wydarzyło

  private news: NewsData[] = [
    new NewsData(
      "Lorem",
      "https://picsum.photos/200/300/?random&t=" + new Date().getTime(),
      loremIpsum(),
      0
    ),
    new NewsData(
      "Ipsum",
      "https://picsum.photos/200/300/?random&t=" + new Date().getTime() + 1,
      loremIpsum(),
      0
    )
  ];

  moveUp(index: number) {
    this.news[index].counter++;
    if (index >= 1 && this.news[index].counter > this.news[index - 1].counter) {
      this.swap(index, index - 1);
      this.onChange.emit();
    }
  }

  moveDown(index: number) {
    this.news[index].counter--;
    if (
      index < this.news.length - 1 &&
      this.news[index].counter < this.news[index + 1].counter
    ) {
      this.swap(index, index + 1);
      this.onChange.emit();
    }
  }

  private swap(x: any, y: any) {
    var b = this.news[x];
    this.news[x] = this.news[y];
    this.news[y] = b;
  }

  getNewsList(): NewsData[] {
    return this.news.slice(); //zabieg "slice" chroni tablicę news - po prostu kopiujemy tablicę.
  }

  removeItem(index: number) {
    this.news.splice(index, 1);
    this.onChange.emit();
  }

  addItem(title: string, imageUrl: string, content: string, counter: number) {
    this.news.push(new NewsData(title, imageUrl, content, counter));
    this.onChange.emit();
  }
}
