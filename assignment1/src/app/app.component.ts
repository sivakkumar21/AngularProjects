import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  public bgColor: string = "blue";
  public username: string = "";
  public password: string = "";
  submit() {
    console.log(this.username);
    console.log(this.password);

  }

}
