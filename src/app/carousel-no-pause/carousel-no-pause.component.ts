import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-no-pause',
  templateUrl: './carousel-no-pause.component.html',
  styleUrls: ['./carousel-no-pause.component.scss']
})
export class CarouselNoPauseComponent implements OnInit {
  public noPause = false;

  constructor() { }

  ngOnInit() {
  }

}
