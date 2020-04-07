import { Component,  OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { INews } from '../../interfaces/news.interface';
import { EApiUrls } from '../../enums/api-urls.enums';
import { HttpService } from '../../../service/http.service'

@Component({
  selector: 'app-owl-carusel',
  templateUrl: './owl-carusel.component.html',
  styleUrls: ['./owl-carusel.component.scss']
})
export class OwlCaruselComponent implements OnInit {
  public mainNews: INews[];
  public subarray: INews[][] = [];////спросить за разбитие на подмасиві

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navText: ['&#60;', '&#62;'],
    autoplayTimeout: 8000,
  // animateOut: 'fadeOut',
  // animateIn: 'fadeIn',
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      }
      
    },
    nav: true
  }

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getMainNews()
  }

  getMainNews() {
    this.http.get(EApiUrls.MAIN_NEWS).subscribe((value: INews[]) =>{
      this.mainNews = value
      this.settingNews()
    },
    error => {
      // error - объект ошибки
    });
  }

  settingNews() {
    // this.mainNews = this.mainNews.filter(function(number) {
    //   return number.priority == 'main'
    // });
    let size = 6; //размер подмассива
    for (let i = 0; i <Math.ceil(this.mainNews.length/size); i++) {
      this.subarray[i] = this.mainNews.slice((i*size), (i*size) + size);
    }
  }
  
}
