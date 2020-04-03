import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  // public count: number = 7;
  // public i: number;
  constructor() { }

  ngOnInit(): void {
    // this.test()
  }
  
  // test() {
  //   for(let i = 1; i<= this.count; i++) {
  //     this.i = i
  //     console.log(this.i)
  //   }
  // }


}
