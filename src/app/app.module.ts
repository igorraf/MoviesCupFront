import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppComponent } from './app.component';
import { ButtonsCheckboxComponent } from './core/components/buttons.checkbox';
import { MovieService } from './movies/movie.service';
import { ChampionshipService } from './championship/championship.service';
import { MovieComponent } from './movies/movie.component';
import { ChampionshipComponent } from './championship/championship.component';
import { MessagesComponent } from './core/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ButtonsCheckboxComponent,
    MovieComponent,
    ChampionshipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
  ],
  providers: [MovieService, ChampionshipService],
  entryComponents: [ButtonsCheckboxComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
