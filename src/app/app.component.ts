import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
  title = 'portfolio';
}
