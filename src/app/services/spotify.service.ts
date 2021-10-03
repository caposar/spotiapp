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
      'Authorization': 'Bearer BQAqVDs0_NbqfJ5GqfXUUFVZPfKqfqeugGNqTG7o_yQTL2AChMYblfzAa4XcAlcaOhFKzCHLlMI_J0C4fuI'
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

  getArtista(termino: string): Observable<Object> {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(
      map(data => {
        return data['artists'].items;
      })
    );
  }

}
