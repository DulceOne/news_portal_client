import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { EApiUrls } from '../../core/enums/api-urls.enums'
import { INews } from '../../core/interfaces/news.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public news: INews;
  constructor(private http: HttpService) { }
  

  ngOnInit() {
    this.getAllNews()
  }

  getAllNews() {
    this.http.get(EApiUrls.NEWS).subscribe((value: INews) =>{
      this.news = value


    },
    error => {
      // error - объект ошибки
    });
  }
}
