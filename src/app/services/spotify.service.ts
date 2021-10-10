import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { }

  getQuery(query: string) {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQADJBMXsg-JkwLu0yYV_dl7kNJeKAvdb9KRNnRyKYxltmSeZPN8mYjc0QrWVyY2Tf3KgUsK2m2elQdHBbw'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.httpClient.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=5')
    .pipe(
      map(data => {
        return data['albums'].items;
      })
    );
  }

  getArtistas(termino: string): Observable<Object> {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(
      map(data => {
        return data['artists'].items;
      })
    );
  }

  getArtista(id: string): Observable<Object> {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): Observable<Object[]> {
    return this.getQuery(`artists/${id}/top-tracks?market=US`)
    .pipe(
      map(data => {
        return data['tracks'];
      })
    );
  }

}
