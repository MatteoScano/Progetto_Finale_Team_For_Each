import { MoviesApiComponent } from './routes/movies-api/movies-api.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './routes/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterByGenreComponent } from './routes/filter-by-genre/filter-by-genre.component';
import { GenrePipePipe } from './pipes/genrePipe/genre-pipe.pipe';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';
import { MovieRatingComponent } from './components/movie-ratings/movie-ratings.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DoubleFilterComponent } from './routes/double-filter/double-filter.component';
import { DoubleFilterPipe } from './pipes/double-filter/double-filter.pipe';
import { SortByComponent } from './routes/sort-by/sort-by.component';
import { LogoutComponent } from './routes/logout/logout.component';
import { StarsComponent } from './components/stars/stars.component';
import { ApiMovieDetailsComponent } from './routes/api-movie-details/api-movie-details.component';
import { CommentsByMovieIdPipe } from './pipes/commentsByMovieId/commentsByMovieId.pipe';
import { CommentsFilteredByMoviesIdComponent } from './routes/comments-filtered-by-movies-id/comments-filtered-by-movies-id.component';
import { RegistrationComponent } from './routes/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    DetailsComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginPageComponent,
    FilterByGenreComponent,
    GenrePipePipe,
    WelcomePageComponent,
    MovieRatingComponent,
    MoviesApiComponent,
    LoadingPageComponent,
    CommentsComponent,
    DoubleFilterComponent,
    DoubleFilterPipe,
    SortByComponent,
    LogoutComponent,
    StarsComponent,
    ApiMovieDetailsComponent,
    CommentsByMovieIdPipe,
    CommentsFilteredByMoviesIdComponent,
    RegistrationComponent,
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
