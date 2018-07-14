import { Component, OnInit } from '@angular/core';
import {Ingredientes, Conductor} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsuarioService} from "../Servicios/usuario.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-atributo-papa',
  templateUrl: './atributo-papa.component.html',
  styleUrls: ['./atributo-papa.component.css']
})
export class AtributoPapaComponent implements OnInit {
 ingredientes:Ingredientes[];
  hijos;
  urlIngredientes= 'http://localhost:1337/Auto?nombreMarca=Ford';
  urlHijos='http://localhost:1337/Conductor?nombres=ceviche&apellidos=rico';
  constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
  }

  ngOnInit() {
    this.http.get<Ingredientes[]>(this.urlIngredientes).subscribe((data: Ingredientes[]) => {
      this.ingredientes = data;
      console.log(this.ingredientes.map(datos=>datos.nombreMarca));

    });

    this.getIngredientes().subscribe(data => {
        this.hijos = data;
        console.log('nombre ' + this.hijos.nombres);
      },
      err => {
        console.log(err)
      }
    );
  }

  getIngredientes(): Observable<Conductor> {
    return this.http.get<Conductor>(this.urlHijos);
  }

  seleccionar(index){
    this._usuarioService.setIndice(index)
  }


}
