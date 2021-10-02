import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { }

  getNewReleases(): Observable<Object> {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQA9sUB5Bv5Jtx-gGj7rChY8eNVUxihv-e32OdY0rsdMA85gV8W7pvD-Xr_ZnuLQkebAQDYQ6hBwkuYnbPQ'
    });

    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases?limit=5', {headers})
  }

  getArtista(termino: string): Observable<Object> {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQA9sUB5Bv5Jtx-gGj7rChY8eNVUxihv-e32OdY0rsdMA85gV8W7pvD-Xr_ZnuLQkebAQDYQ6hBwkuYnbPQ'
    });

    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
  }

}
