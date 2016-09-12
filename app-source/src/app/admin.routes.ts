import {RouterConfig} from "@angular/router";
import {AuthGuard} from "./shared/auth.guard";
import {ArtistAddComponent} from "./components/artists/artist-add/artist-add-component";
import {ArtistEditComponent} from "./components/artists/artist-edit/artist-edit-component";
import {SoundtrackEditComponent} from "./components/soundtracks/soundtrack-edit/soundtrack-edit.component";
import {SoundtrackAddComponent} from "./components/soundtracks/soundrack-add/soundtrack-add.component";
import {GenreEditComponent} from "./components/genre/genre-edit/genre-edit.component";
import {GenreAddComponent} from "./components/genre/genre-add/genre-add.component";
import {MainComponent} from "./components/admin/main.component";
import {AdminEditSoundtrackComponent} from "./components/admin/edit-soundtrack/edit-soundtrack.component";
import {AdminEditArtistComponent} from "./components/admin/edit-artist/edit-artist.component";
import {AdminEditGenreComponent} from "./components/admin/edit-genre/edit-genre.component";
/**
 * Created by Ishaq17 on 2016-09-11.
 */

export const ADMIN_ROUTES: RouterConfig = [
  { path: '', component: MainComponent},
  { path: 'artist/new', component: ArtistAddComponent},
  {path: 'artist/edit', component: AdminEditArtistComponent},
  { path: 'artist/edit/:id', component: ArtistEditComponent},
  {path: 'soundtrack/new', component: SoundtrackAddComponent},
  {path: 'soundtrack/edit', component: AdminEditSoundtrackComponent},
  { path: 'soundtrack/edit/:id', component: SoundtrackEditComponent},
  { path: 'genre/new', component: GenreAddComponent},
  {path: 'genre/edit', component: AdminEditGenreComponent},
  { path: 'genre/edit/:id', component: GenreEditComponent}
];
