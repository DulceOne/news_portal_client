import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OwlCaruselComponent } from '../core/libs/owl-carusel/owl-carusel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewsComponent } from './home/news/news.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: [
      {
        path: 'home', // toDo ты же уже умеешь выносиить пути в enum =)
        component: HomeComponent
      },
      {
        path: 'home/news/:id',
        component: NewsComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OwlCaruselComponent,
    NewsComponent,
  ],
  imports: [
    CarouselModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
