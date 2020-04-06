import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { EApiUrls } from '../../core/enums/api-urls.enums';
import { IGames } from '../../core/interfaces/game.interface';

export interface IResponse {
  data: IGames[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public games: IGames[];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getGames()
  }

  getGames() {
    this.http.get(EApiUrls.GAMES).subscribe((value: IResponse) => {
      this.games = value.data
      console.log(this.games)
    },
    error => {

    });
  }

}
