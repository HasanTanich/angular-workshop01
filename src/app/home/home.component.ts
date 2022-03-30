import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // E: string = '09:42';
  // L: string = '17:33';

  constructor() { }

  ngOnInit(): void {
    // this.clock(this.E, this.L);
  }

  // clock(E, L) {
  //   let startHH = E.slice(0, 2);
  //   if (startHH[0] == 0) startHH = startHH[1];
  //   console.log(startHH);
  // }
}
