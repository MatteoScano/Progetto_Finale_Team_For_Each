import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
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
  { path: "star_ratings", component: RatingStarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
