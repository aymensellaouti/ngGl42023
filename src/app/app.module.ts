import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CardComponent } from './cv/card/card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TestPureComponent } from './test-pure/test-pure.component';
import { FormsModule } from '@angular/forms';
import { CalculFuPipe } from './pipes/calcul-fu.pipe';
import { createLogger } from './provider factories/instances.factory';
import { loggerToken } from './injection tokens/logger.token';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    HighlightDirective,
    DefaultImagePipe,
    TestPureComponent,
    CalculFuPipe,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [],
  providers: [
    {
      useFactory: createLogger,
      provide: loggerToken,
      deps: []
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
