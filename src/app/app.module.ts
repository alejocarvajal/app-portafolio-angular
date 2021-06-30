import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import {HttpClientModule} from "@angular/common/http";
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ListViewsComponent } from './list-views/list-views.component';
import { LoginComponent } from './login/login.component';
import { MostrarMilesPipe } from './mostrar-miles.pipe';
import { ImagenRotaDirective } from './imagen-rota.directive';
import { MyFocusDirective } from './my-focus.directive';
import { UploadPageComponent } from './upload-page/upload-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CardComponent,
    PostDetailComponent,
    HomeComponent,
    ListViewsComponent,
    LoginComponent,
    MostrarMilesPipe,
    ImagenRotaDirective,
    MyFocusDirective,
    UploadPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ CookieService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
