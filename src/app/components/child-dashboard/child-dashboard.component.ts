import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/dataservice.service';

@Component({
  selector: 'app-child-dashboard',
  templateUrl: './child-dashboard.component.html',
  styleUrls: ['./child-dashboard.component.css'],
})
export class ChildDashboardComponent implements OnInit {
  // @Input() message: string;
  message: string;

  constructor(private serviceData: DataService) {}

  ngOnInit(): void {
    this.serviceData.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  newMessage() {
    this.serviceData.changeMessage('changed from child');
  }
}
