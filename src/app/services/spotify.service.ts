import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor( private http:Http ) { }

  getArtistas( termino:string ){
    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQB0h8_zYDtqzEb6j4GKKyayOCFr6qaPU4kv-s1vkNcuIdLNAGYjMiTjY9u7D3hErDzq1vzxfsIIzlUvVdvzyw' );

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
            .map(res => {
              //console.log(res.json().artists.items);
              this.artistas = res.json().artists.items;
              console.log(this.artistas);
              //return res.json().artists.items;
            });

  }

}
