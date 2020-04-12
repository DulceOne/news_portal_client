import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { EApiUrls } from '../../core/enums/api-urls.enums';
import { INews } from '../../core/interfaces/news.interface';
import { ActivatedRoute, Router } from '@angular/router';

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
  public defoultNews: INews[];
  public collections: Number;
  public id: ActivatedRoute;
  public mode: string = 'default';
  public page: Router;

  constructor(
    private activateRoute: ActivatedRoute, 
    private http: HttpService,
    private router: Router
    ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = this.activateRoute.snapshot.params['id'];
      this.setPage(1)
    });
  }

  setPage(page) {
    if(this.router.url === "/main/news") {
      this.getDefoultNews(page)
    }
    else {
      this.getGameNews(page)
    }
  }

  getDefoultNews(page) {
    this.http.get(EApiUrls.DEFAULT_NEWS+"?page="+page).subscribe((value: IResponse) =>{
      this.defoultNews = value.data
      console.log('default')
      this.collections = value.collections
    },
    error => {
      // error - объект ошибки
    });
  }

  getGameNews(page) {
    this.http.get(EApiUrls.GAME_NEWS+this.id+"?page="+page).subscribe((value: IResponse) =>{
      this.defoultNews = value.data
      console.log('game')

      // console.log(this.defoultNews)
      this.collections = value.collections
    },
    error => {
      // error - объект ошибки
    });
  }
}
