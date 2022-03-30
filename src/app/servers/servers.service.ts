import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor() { }
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'online'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    },
    {
      id: 4,
      name: 'Noobserver',
      status: 'offline'
    }
  ]

  getServers() {
    return this.servers;
  }
  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      });
    return server;
  }
  updateServer(id: number, server: { name: string, status: string }) {
    this.servers = this.servers.map((s) => {
      if (s.id === id) {
        s.name = server.name;
        s.status = server.status;
      }
      return s;
    });
    console.log(this.servers);
  }
}
