import { MoviesApiComponent } from './routes/movies-api-Dashboard/movies-api.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterByGenreComponent } from './routes/filter-by-genre/filter-by-genre.component';
import { GenrePipePipe } from './pipes/genrePipe/genre-pipe.pipe';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SortByComponent } from './routes/sort-by/sort-by.component';
import { LogoutComponent } from './routes/logout/logout.component';
import { ApiMovieDetailsComponent } from './routes/api-movie-details/api-movie-details.component';
import { CommentsByMovieIdPipe } from './pipes/commentsByMovieId/commentsByMovieId.pipe';
import { CommentsFilteredByMoviesIdComponent } from './routes/comments-filtered-by-movies-id/comments-filtered-by-movies-id.component';
import { WeatherComponent } from './components/weather/weather.component';
import { RegistrationComponent } from './routes/registration/registration.component';
import { FilterByWeatherConditionsComponent } from './routes/filter-by-weather-conditions/filter-by-weather-conditions.component';
import { MovieRatingsComponent } from './components/movie-ratings/movie-ratings.component';
import { UserComponent } from './routes/user/user.component';
import { CommentsByUserComponent } from './routes/comments-by-user/comments-by-user.component';
import { AddCommentComponent } from './routes/add-comment/add-comment.component';
import { MyAccountComponent } from './routes/my-account/my-account.component';
import { EditCommentComponent } from './routes/edit-comment/edit-comment.component';
import { BetaFooterComponent } from './components/beta-footer/beta-footer.component';
import { TermsAndConditionsComponent } from './routes/terms-and-conditions/terms-and-conditions.component';
import { SearchMovieComponent } from './routes/search-movie/search-movie.component';
import { ListeComponent } from './routes/liste/liste.component';
import { ListFilteredByUserIdPipe } from './pipes/listFilteredByUserId/listFilteredByUserId.pipe';
import { ListFilteredByMustSeeComponent } from './routes/list-filtered-by-must-see/list-filtered-by-must-see.component';
import { ListFilteredByMustSeePipe } from './pipes/listFilteredByMustSee/listFilteredByMustSee.pipe';
import { HeaderBetaComponent } from './components/header-beta/header-beta.component';
import { IdToTitlePipe } from './pipes/idToTitle.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginPageComponent,
    FilterByGenreComponent,
    GenrePipePipe,
    WelcomePageComponent,
    MoviesApiComponent,
    LoadingPageComponent,
    CommentsComponent,
    SortByComponent,
    LogoutComponent,
    ApiMovieDetailsComponent,
    CommentsByMovieIdPipe,
    CommentsFilteredByMoviesIdComponent,
    WeatherComponent,
    RegistrationComponent,
    FilterByWeatherConditionsComponent,
    MovieRatingsComponent,
    UserComponent,
    CommentsByUserComponent,
    AddCommentComponent,
    MyAccountComponent,
    EditCommentComponent,
    BetaFooterComponent,
    TermsAndConditionsComponent,
    SearchMovieComponent,
    ListeComponent,
    ListFilteredByMustSeeComponent,
    ListFilteredByUserIdPipe,
    ListFilteredByMustSeePipe,
    HeaderBetaComponent,
    IdToTitlePipe
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
