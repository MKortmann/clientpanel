import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private serviceData: DataService) {}

  message: string;

  ngOnInit(): void {
    this.serviceData.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
