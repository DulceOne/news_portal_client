import { Component,  OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { INews } from '../../interfaces/news.interface';

@Component({
  selector: 'app-owl-carusel',
  templateUrl: './owl-carusel.component.html',
  styleUrls: ['./owl-carusel.component.scss']
})
export class OwlCaruselComponent implements OnInit {
  @Input() owlNews: INews[];
  public subarray: INews[][] = [];

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

  constructor() { }

  ngOnInit() {
    this.settingNews()
  }

  settingNews() {
    let size = 6; //размер подмассива
    for (let i = 0; i <Math.ceil(this.owlNews.length/size); i++) {
      this.subarray[i] = this.owlNews.slice((i*size), (i*size) + size);
    }
  }
  
}
