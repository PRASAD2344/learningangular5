import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }
    `
  ]
})
export class AppComponent implements OnInit{

  queryFor: string;
  artists: any[];
  currentArtist: any;

  constructor(private http: HttpClient) {
    this.artists = [];
    this.queryFor = '';
  }

  showArtist(artist: any) {
    artist.highlight = !artist.highlight;
    this.queryFor = '';
    this.currentArtist = artist;
  }

  ngOnInit(): void {
    this.http.get<any[]>('./assets/data.json').subscribe(data => {
      this.artists = data;
    })
  }

}