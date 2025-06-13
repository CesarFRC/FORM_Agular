import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../servicio/usuario.service';
import { Usuario } from '../../../interfaces/interfas_usuario';

@Component({
  selector: 'body',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuariosForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.usuariosForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', Validators.required],
      contrasena: ['', Validators.required]

    });
  }

  onSubmit(): void {
    if (this.usuariosForm.valid) {
      const nuevoUsuario: Usuario = this.usuariosForm.value;

      this.usuarioService.crearUsuario(nuevoUsuario).subscribe({
        next: () => this.router.navigate(['/Tabla_usuarios_registrados']),
        error: (err) => {
          alert('Error al registrar');
          console.error(err);
        }
      });
    } else {
      alert('Formulario inválido');
    }
  }
}
