import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'body',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
 template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'formulario';
}
