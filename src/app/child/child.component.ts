import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  // イベントを受け取る設定
  @Input() events: Observable<void>;
  // イベントの購読設定
  private eventsSubscription: Subscription;
  // ブラウザ表示コメント用
  message: String;

  ngOnInit() {
    // イベントを購読する
    this.eventsSubscription = this.events.subscribe(
      () =>
        // クリックされたタイミングでここが呼ばれるので、任意の処理を記述
        (this.message = 'ボタンがクリックされました')
    );
  }

  ngOnDestroy() {
    // ページ遷移する際に購読を停止
    this.eventsSubscription.unsubscribe();
  }
}
