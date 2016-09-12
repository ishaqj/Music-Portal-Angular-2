import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Configuration} from './app.constants';
import {Observable} from "rxjs/Observable";
import {Artist} from "../shared/artist";

@Injectable()
export class APIService {

    private artists: string = "artists";
    private artist: string = "artists/";
    private update_artist: string = "artists/";
    private storeArtist: string = "artists/store";
    private listArtists: string = "artistlist";

    private soundtrack: string = "soundtrack";
    private fetchsong: string = "soundtrack/";
    private storeSoundtrack: string = "soundtrack/store";
    private update_soundtrack: string = "soundtrack/";
    private topp10: string = "top10";

    private signup : string = "auth/signup";
    private login : string = "auth/login";

    private genre: string = "genre/";
    private genrelist: string = "genrelist";
    private allgenres: string = "genres";
    private storeGenre: string = "genre/store";
    private update_genre: string = "genre/";
    private browseByGenre: string = "browsegenre/";

    private apiUrl = this._config.ServerWithApiUrl;
    private token = localStorage.getItem('token') !== null ? '?token=' + localStorage.getItem('token') : "";

  constructor(private _http: Http, private _config: Configuration) {}

    //ARTIST
    getAllArtists(): Observable<any> {
      return this._http.get(this.apiUrl + this.artists).map(res => res.json());

      }

    listArtist(): Observable<any> {
      return this._http.get(this.apiUrl + this.listArtists).map(res => res.json());
    }

    browseArtists(): Observable<any> {
      return this._http.get(this.apiUrl + "browseartists").map(res => res.json());
    }

    browseArtist(id: any): Observable<any> {
        return this._http.get(this.apiUrl + this.artist +  id).map(res => res.json());
      }

    fetchArtist(id: number): any {
     return this._http.get(this.apiUrl + this.artist + id).map(res => res.json());
    }

    insertArtist(artist: Artist): Observable<any> {
      const body = JSON.stringify(artist);
      const headers = new Headers();
      headers.append('Content-type', 'application/json');
      return this._http.post(this.apiUrl + this.storeArtist + this.token, body,{
          headers: headers
      });
    }

    updateArtist(id: number, artist: Artist) {
      const body = JSON.stringify(artist);
      const headers = new Headers();
      headers.append('Content-type', 'application/json');
      return this._http.put(this.apiUrl + this.update_artist + id + this.token, body, {
        headers: headers
      });
    }

  //SOUNDTRACK
  insertSoundtrack(soundtrack: any): Observable<any> {
    const body = JSON.stringify(soundtrack);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post(this.apiUrl + this.storeSoundtrack + this.token, body,{
      headers: headers
    });
  }

  updateSoundtrack(id: number, soundtrack: any) {
    const body = JSON.stringify(soundtrack);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.put(this.apiUrl + this.update_soundtrack + id + this.token, body, {
      headers: headers
    });
  }

  fetchSoundtrack(id: number): any {
    return this._http.get(this.apiUrl + this.fetchsong + id).map(res => res.json());
  }

  getAllSoundtracks() : any {
    return this._http.get(this.apiUrl + this.soundtrack).map(res => res.json());
  }

  top10() : any {
    return this._http.get(this.apiUrl + this.topp10).map(res => res.json());
  }

  //GENRE

  insertGenre(genre: any): Observable<any> {
    const body = JSON.stringify(genre);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post(this.apiUrl + this.storeGenre + this.token, body,{
      headers: headers
    });
  }

  updateGenre(id: number, soundtrack: any) {
    const body = JSON.stringify(soundtrack);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.put(this.apiUrl + this.update_genre + id + this.token, body, {
      headers: headers
    });
  }

  getAllGenres(): Observable<any> {
    return this._http.get(this.apiUrl + this.genrelist).map(res => res.json());
  }

  listAllGenres(): Observable<any> {
    return this._http.get(this.apiUrl + this.allgenres).map(res => res.json());
  }

  findGenre(id: number): Observable<any> {
    return this._http.get(this.apiUrl + this.genre +id).map(res => res.json());
  }

  browseGenre(id: number): Observable<any> {
    return this._http.get(this.apiUrl + this.browseByGenre +id).map(res => res.json());
  }
}

