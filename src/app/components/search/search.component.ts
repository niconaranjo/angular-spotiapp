import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor( private _spotifyService:SpotifyService) { }

  ngOnInit() {

    this._spotifyService.getArtistas("metallica")
          .subscribe(data =>{
            console.log("Esto es del SEARCH.component");
            console.log(data);
          });

  }

}
