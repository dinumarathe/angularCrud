import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './products/create/create.component';
import { ProductsService } from './products/products.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule, 
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxBootstrapIconsModule.forRoot(allIcons)

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
