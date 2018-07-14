import { Component, OnInit } from '@angular/core';
import {Ingredientes, Conductor} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../Servicios/usuario.service";

@Component({
  selector: 'app-info-hijos',
  templateUrl: './info-hijos.component.html',
  styleUrls: ['./info-hijos.component.css']
})
export class InfoHijosComponent implements OnInit {

  autos:Conductor;
  urlIngredientes= 'http://localhost:1337/Conductor?nombres=Sergio';
  constructor(private http: HttpClient, private  usuarioService: UsuarioService) { }

  ngOnInit() {
    this.http.get<Conductor[]>(this.urlIngredientes).subscribe((data:Conductor[]) => {
      this.autos = data[this.usuarioService.indiceSeleccionado];
    });
  }

}
