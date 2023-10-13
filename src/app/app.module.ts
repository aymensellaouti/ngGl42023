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
import { RouterParamComponent } from './components/router-param/router-param.component';
import { FrontComponent } from './components/front/front.component';
import { AdminComponent } from './components/admin/admin.component';
import { MasterDetailsComponent } from './cv/master-details/master-details.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestformComponent } from './components/testform/testform.component';

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
    RouterParamComponent,
    FrontComponent,
    AdminComponent,
    MasterDetailsComponent,
    DetailCvComponent,
    NF404Component,
    TestformComponent,
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
