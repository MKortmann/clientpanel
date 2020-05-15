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
  totalOwed: number;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
      this.getTotalOwed();
    });
  }

  /*
  Die reduce()-Methode reduziert ein Array auf einen einzigen Wert, indem es jeweils zwei Elemente (von links nach rechts) durch eine gegebene Funktion reduziert.
  Here it start with the value 0.
  */
  getTotalOwed() {
    this.totalOwed = this.clients.reduce((total, client) => {
      // I am using the unary operator to convert string to number
      return total + +client.balance;
    }, 0);
  }
}
