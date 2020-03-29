import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../service/http.service';
import { EApiUrls } from '../../../core/enums/api-urls.enums';
import { INews } from '../../../core/interfaces/news.interface'


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  id: String;
  item: INews;
     
  
  constructor(private activateRoute: ActivatedRoute, private http: HttpService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getNewsById()
  }

  getNewsById() {
    this.http.get(EApiUrls.NEWS+'/'+this.id).subscribe((value: INews)=> {
      this.item = value
    },
    error => {

    });
  }
}
