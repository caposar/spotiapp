import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;

    this.spotifyService.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }

}
