import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { SelectorComponent } from './components/selector/selector.component';
import { SelectorHandComponent } from './components/selector-hand/selector-hand.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SelectorComponent,
    SelectorHandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
