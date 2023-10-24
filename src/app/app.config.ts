import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { LogService } from './services/log.service';

export const appConfig: ApplicationConfig = {
  //antes
  //providers: [provideRouter(routes), LogService ]

  //[24-10-2023]
  providers: [provideRouter(routes,withComponentInputBinding()), LogService ]
};
