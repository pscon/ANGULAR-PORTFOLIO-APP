import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaulCv';

update: boolean =false;
joke: any;
  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(event => {

      this.update = true;
    })
  }

  ngOnInit() {
    this.data.gimmePaulCv().subscribe(res => {
      this.joke = res;
    })
  }
}
