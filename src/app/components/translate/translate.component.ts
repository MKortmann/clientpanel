import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  change(code: string) {
    this.translate.use(code);
  }
}
