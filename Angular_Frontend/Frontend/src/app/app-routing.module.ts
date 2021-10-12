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



const routes: Routes = [
  { path: "", redirectTo : '/welcome', pathMatch: 'full' },
  { path: "welcome", component : WelcomePageComponent},
  { path: "dashboard", component : DashboardComponent },
  { path: "add", component : AddComponent },
  { path: "details/:id", component : DetailsComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "login", component: LoginPageComponent },
  { path: "filterByGenre", component: FilterByGenreComponent },
  { path: "movie_ratings", component: MovieRatingComponent},
  { path: "loading", component: LoadingPageComponent},
  { path: "moviesApi", component: MoviesApiComponent},
  { path: "doublefilter", component: DoubleFilterComponent},
  { path: "sortBy", component: SortByComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
