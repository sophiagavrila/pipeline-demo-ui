import { Component } from '@angular/core';
import { hostURL } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rest API Frontend';
  hostURL = hostURL;

  ngOnInit() {

    console.log(hostURL);

  }

}
