import { SliteService } from './../shared/services/slite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent implements OnInit {
  public slites: any[] = [];
  constructor(
    private sliteService: SliteService
  ) { }

  ngOnInit() {
    this.sliteService.getSlites()
    .then(response => {
      console.log(response);
      if (response.fun.access) {
        this.slites = response.fun.ls;
      }
    });
  }


}
