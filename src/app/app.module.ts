import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { CarouselNoPauseComponent } from './carousel-no-pause/carousel-no-pause.component';
import { ProductosComponent } from './productos/productos.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { ContactoComponent } from './contacto/contacto.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ValidatedInputDirective } from './shared/directives/validated-input.directive';
import { SliteService } from './shared/services/slite.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    CarouselNoPauseComponent,
    ProductosComponent,
    NovedadesComponent,
    SafePipe,
    ContactoComponent,
    CotizacionComponent,
    ValidatedInputDirective
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [SliteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
