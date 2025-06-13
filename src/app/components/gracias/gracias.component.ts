import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../servicio/usuario.service';

@Component({
  selector: 'app-gracias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template:`
    <h2>¡Gracias por registrarte!</h2>
    
    <h3>Usuarios registrados:</h3>
    <table border="1" cellpadding="5" cellspacing="0" *ngIf="usuarios.length > 0; else noData">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Email</th>
          <th>Edad</th>
          <th>Contraseña</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of usuarios">
          <td>{{ user.id }}</td>
          <td>{{ user.nombre }}</td>
          <td>{{ user.apellidos }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.edad }}</td>
          <td>{{ user.contrasena }}</td>
        </tr>
      </tbody>
    </table>

    <ng-template #noData>
      <p>No hay usuarios registrados.</p>
    </ng-template>
  `
})
export class GraciasComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private http: HttpClient, private usuarioService: UsuarioService) {}
ngOnInit() {
    const token = localStorage.getItem('token');
     if (!token) {
    
    alert('Acceso denegado. Primero regístrate.');
    window.location.href = '/'; 
    return;
  }
  this.usuarioService.obtenerUsuarios().subscribe({
    next: data => this.usuarios = data,
    error: err => console.error('Error al cargar usuarios:', err)
  });
}
}
