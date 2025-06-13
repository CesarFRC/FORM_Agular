import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { RegistroComponent } from '../src/app/components/registro/registro.component';
import { GraciasComponent } from '../src/app/components/gracias/gracias.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: RegistroComponent },
      { path: 'Tabla_usuarios_registrados', component: GraciasComponent }
    ])
  ]
});
