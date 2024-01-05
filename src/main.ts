import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)

  .catch((err) => console.error(err));
  providers:[
   importProvidersFrom(HttpClientModule),
  ]
