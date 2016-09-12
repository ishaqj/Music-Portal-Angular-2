import { provideRouter, RouterConfig } from '@angular/router';

import {ArtistList} from "./components/artists/artist-list/artist-list.component";
import {ArtistDetailComponent} from "./components/artists/artist-detail/artist-detail.component";
import {SignUp} from "./components/authentication/signup.component";
import {SignIn} from "./components/authentication/signin.component";
import {AuthGuard} from "./shared/auth.guard";
import {AdminComponent} from "./components/admin/admin.component";
import {ADMIN_ROUTES} from "./admin.routes";
import {ArtistBrowseListComponent} from "./components/artists/artist-list/artist-browse-list.component";
import {GenreListComponent} from "./components/genre/genre-list/genre-list.component";
import {GenreDetailComponent} from "./components/genre/genre-detail/genre-detail.component";
import {Top10Component} from "./components/soundtracks/top10/top10.component";

const routes: RouterConfig = [
  { path: '', redirectTo: 'artists', terminal: true },
  { path: 'artists', component: ArtistList},
  { path: 'browseartists', component: ArtistBrowseListComponent},
  { path: 'artist/:id', component: ArtistDetailComponent},
  { path: 'genres', component: GenreListComponent},
  { path: 'genre/:id', component: GenreDetailComponent},
  { path: 'top10', component: Top10Component},
  { path: 'signup', component: SignUp},
  { path: 'login', component: SignIn},
  { path: 'admin', component: AdminComponent, children: ADMIN_ROUTES, canActivate: [AuthGuard]},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
