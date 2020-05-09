import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clientpanel';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.onLangChange.subscribe(
      (x) => {
        console.log('Language is changed to: ', x);
      },
      (error) => console.log('onLangChange failed')
    );
  }
}
