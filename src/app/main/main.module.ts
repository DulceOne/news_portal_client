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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from './home/game/game.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: [
      {
        path: 'news', // toDo ты же уже умеешь выносиить пути в enum =)
        component: HomeComponent
      },
      {
        path: 'news/:id',
        component: NewsComponent
      },
      {
        path: 'news/game/:id',
        component: HomeComponent
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
    GameComponent,
  ],
  imports: [
    CarouselModule,
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
