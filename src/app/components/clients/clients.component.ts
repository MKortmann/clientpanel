import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';

import { Client } from '../../models/Clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      console.log(clients);
      this.clients = clients;
    });
  }
}
