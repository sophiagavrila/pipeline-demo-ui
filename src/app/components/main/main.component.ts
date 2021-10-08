import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = "Code Pipeline to S3 is working!"
  image = 'https://freesvg.org/img/black_orange_men_cloud.png'

  constructor() { }

  ngOnInit(): void {

  }

}
