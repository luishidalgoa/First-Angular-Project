import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LogService } from './services/log.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), LogService ]
};
