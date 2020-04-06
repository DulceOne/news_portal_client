import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { EApiUrls } from '../../core/enums/api-urls.enums';
import { INews } from '../../core/interfaces/news.interface';

export interface IResponse {
  data: INews[];
  pages: Number; 
  curent_page: Number;
  collections: Number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public news: INews[];
  public collections: Number;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getAllNews(1)
  }

  getAllNews(page) {
    this.http.get(EApiUrls.NEWS+"?page="+page).subscribe((value: IResponse) =>{
      this.news = value.data
      this.collections = value.collections
    },
    error => {
      // error - объект ошибки
    });
  }
}
