import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouletteComponent } from './roulette/roulette.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './roulette/recipes/recipes.component';
import { ShoppingListComponent } from './roulette/shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RouletteComponent,
    FooterComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
