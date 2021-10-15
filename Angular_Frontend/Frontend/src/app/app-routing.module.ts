import { WeatherComponent } from './components/weather/weather.component';
import { ApiMovieDetailsComponent } from './routes/api-movie-details/api-movie-details.component';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import { LogoutComponent } from './routes/logout/logout.component';
import { SortByComponent } from './routes/sort-by/sort-by.component';
import { DoubleFilterComponent } from './routes/double-filter/double-filter.component';
import { MoviesApiComponent } from './routes/movies-api/movies-api.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { FilterByGenreComponent } from './routes/filter-by-genre/filter-by-genre.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component'
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { EditComponent } from './routes/edit/edit.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';
import { MovieRatingComponent } from './components/movie-ratings/movie-ratings.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsFilteredByMoviesIdComponent } from './routes/comments-filtered-by-movies-id/comments-filtered-by-movies-id.component';

const routes: Routes = [
  { path: "", redirectTo : '/welcome', pathMatch: 'full' },
  { path: "welcome", component : WelcomePageComponent},
  { path: "dashboard", component : DashboardComponent , /* canActivate:[AuthGuardService] */},
  { path: "add", component : AddComponent, /* canActivate:[AuthGuardService] */},
  { path: "details/:id", component : DetailsComponent /*, canActivate:[AuthGuardService]/ */},
  { path: "edit/:id", component: EditComponent, /* canActivate:[AuthGuardService] */ },
  { path: "login", component: LoginPageComponent },
  { path: "filterByGenre", component: FilterByGenreComponent, /*canActivate:[AuthGuardService] */ },
  { path: "movie_ratings", component: MovieRatingComponent, /*canActivate:[AuthGuardService] */},
  { path: "loading", component: LoadingPageComponent},
  { path: "moviesApi", component: MoviesApiComponent, /* canActivate:[AuthGuardService] */},
  { path: "comments", component: CommentsComponent, /* canActivate:[AuthGuardService] */},
  { path: "doublefilter", component: DoubleFilterComponent,/* canActivate:[AuthGuardService] */},
  { path: "sortBy", component: SortByComponent, /* canActivate:[AuthGuardService] */},
  { path: "logout", component: LogoutComponent},
  { path: "movieApiDetails/:id", component: ApiMovieDetailsComponent},
  { path: "movieComments", component: CommentsFilteredByMoviesIdComponent},
  { path: "weather", component: WeatherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
