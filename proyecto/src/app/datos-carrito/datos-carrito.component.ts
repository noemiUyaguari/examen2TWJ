import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../Servicios/usuario.service";
import {Ingredientes} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-datos-carrito',
  templateUrl: './datos-carrito.component.html',
  styleUrls: ['./datos-carrito.component.css']
})
export class DatosCarritoComponent implements OnInit {
  contador=this._usuarioService.contador;
  urlUsuarios= 'http://localhost:1337/Usuarios';
  usuarios; visible;
  nombre; nombreEditar;
  apellido; apellidoEditar;
  correo; correoEditar;
  total=0;
  constructor(private _usuarioService: UsuarioService, private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit() {
    this.http.get<Ingredientes[]>(this.urlUsuarios).subscribe((data: Ingredientes[]) => {
      this.usuarios = data;
      console.log(this.usuarios.map(datos=>datos.nombreModelo));
    });

    this.total=this._usuarioService.total;
    this.visible=this._usuarioService.visible;
    this.escucharcambiosEliminar();
    this.escucharCambiosTotal();
  }

  escucharCambiosTotal(){
    this._usuarioService.emitircambioCompra.subscribe((ingredientes) => {
      this.total = ingredientes;
    });
  }
  escucharcambiosEliminar(){
    this._usuarioService.emiircambioEliminar.subscribe((visible) => {this.visible= visible;});
  }
  guardar(){
    this.nombre=this.nombreEditar;
    this.correo=this.correoEditar;
    this.apellido=this.apellidoEditar;
  }

  completarOrden(){
    this.nombre=this.cookieService.get('user');
    this.correo=this.cookieService.get('correo');
    this.apellido=this.cookieService.get('apellido');
  }
  eliminar(){
    this.contador--;
    this._usuarioService.emitirCambio(this.contador);
    this._usuarioService.emitirEliminar(false);
    this.total=this._usuarioService.total-50;
    this._usuarioService.emitirQuitarTotal(this.total);
  }

}
