import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
  }

  ngOnInit() {
    this.cargarArtista();
  }

  cargarArtista() {
    this.loading = true;
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        const id = params.get('id');
        this.getArtista(id);
        this.loading = false;
        // this.mensajeSinResultados = `No se encontraron resultados para la busqueda "${id}".`;
      }
    });
  }

  getArtista(id: string) {
    this.spotifyService.getArtista(id).subscribe(artista => {
      this.artista = artista;
    });
  }

}
