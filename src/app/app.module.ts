import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { PipesPipe } from './pipes.pipe';
import { SpecsComponent } from './specs/specs.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { FormsModule } from '@angular/forms';
import { IsActiveService } from './is-active.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    SecondNavbarComponent,
    PipesPipe,
    SpecsComponent,
    ProgressBarsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    IsActiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
