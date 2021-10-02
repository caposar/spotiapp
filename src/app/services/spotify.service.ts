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
      'Authorization': 'Bearer BQA9sUB5Bv5Jtx-gGj7rChY8eNVUxihv-e32OdY0rsdMA85gV8W7pvD-Xr_ZnuLQkebAQDYQ6hBwkuYnbPQ'
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
