export class NewsData {
  public id: number;
  public title: string;
  public content: string;
  public imageUrl: string;
  public counter: number;

  constructor(
    title: string,
    imageUrl: string,
    content: string,
    counter: number
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.content = content;
    this.counter = counter;
  }
} //Klasa modelowa / transportowa
