import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { PipesPipe } from './pipes.pipe';
import { SpecsComponent } from './specs/specs.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import { TypePipe } from './type.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { MatInputModule } from '@angular/material/input';


library.add( faSortAmountDownAlt);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    SecondNavbarComponent,
    PipesPipe,
    SpecsComponent,
    ProgressBarsComponent,
    TypePipe,
    ModalComponent,
    DialogModalComponent,
    
  ],
  imports: [
    MatInputModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, DialogModalComponent]
})
export class AppModule { 
  constructor(){
    
  }
  
}
