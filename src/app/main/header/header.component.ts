import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { EApiUrls } from '../../core/enums/api-urls.enums';
import { IGames } from '../../core/interfaces/game.interface';
import { TransfertService } from '../../core/services/transfert.service';

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
  constructor(private http: HttpService, private sTransfert: TransfertService) { }

  ngOnInit() {
    this.getGames()
  }

  getGames() {
    this.http.get(EApiUrls.GAMES).subscribe((value: IResponse) => {
      this.games = value.data
    },
    error => {

    });
  }

  reDraw() {
    this.sTransfert.setData(true)
  }

}
