import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements DoCheck {

  @Input() msg: string = "";
  notification: string = "";
  visible: boolean = false;

  ngDoCheck(): void {
    if(this.msg !== ""){
      this.notification = this.msg;
      this.visible = true;
    }
  }

}
