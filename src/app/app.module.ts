import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ArticleEffects } from './effects/article.effects';
import { reducers } from './reducers/reducer';
import { TestData } from './test-data';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ArticleEffects]),
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
