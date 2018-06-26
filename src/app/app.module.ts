import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SinglePageComponent } from './pages/single/single-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';

import { LoggerService } from './services/logger.service';
import { HttpService } from './services/http.service';
import { BroadcasterService } from './services/broadcaster.service';
import { ListPageComponent } from './pages/list/list-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PageMapComponent } from './pages/map/page-map.component';
import { SearchComponent } from './components/search/search.component';
import { HomePageResolver } from "./pages/home/home-page.resolver";
import { SinglePageResolver } from "./pages/single/single-page.resolver";
import { MapComponent } from './components/map/map.component';
import { ContactComponent } from './components/contact/contact.component';
import {FormsModule} from "@angular/forms";
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomePageComponent,
    resolve: { 'content' : HomePageResolver }
  }, {
    path: 'imovel/:id/:prettyName',
    component: SinglePageComponent,
    resolve: { 'content' : SinglePageResolver }
  }, {
    path: 'contato',
    component: ContactPageComponent
  }, {
    path: 'bombinhas',
    component: AboutPageComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SinglePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    ListPageComponent,
    SliderComponent,
    CardComponent,
    GalleryComponent,
    PageMapComponent,
    SearchComponent,
    MapComponent,
    ContactComponent,
    HeaderHomeComponent,
    BackToTopComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    HttpService,
    LoggerService,
    BroadcasterService,
    HomePageResolver,
    SinglePageResolver
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
