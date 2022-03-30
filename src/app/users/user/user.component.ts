import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: {
    id: number;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);

    this.user = { id: this.route.snapshot.params['id'] };
    this.route.params.subscribe((params: Params) => {
      this.user = { id: params['id'] };
    });
  }
}
