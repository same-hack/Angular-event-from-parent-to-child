import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  eventsSubject: Subject<void> = new Subject<void>();

  onClick() {
    /**クリックイベントを通知 */
    this.eventsSubject.next();
  }
}
