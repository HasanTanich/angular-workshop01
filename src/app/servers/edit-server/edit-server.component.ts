import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: { id: number, name: string, status: string };
  serverName: string;
  serverStatus: string;
  allowEdit: boolean = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe((queryParams: Params) => {
      let id = +this.route.snapshot.params['id'];
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      this.server = this.serversService.getServer(id);
    });
    this.route.fragment.subscribe();

    console.log(this.server);

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
