import { Component, OnInit } from '@angular/core';
import {Ingredientes, Conductor} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../Servicios/usuario.service";

@Component({
  selector: 'app-card-hijo',
  templateUrl: './card-hijo.component.html',
  styleUrls: ['./card-hijo.component.css']
})
export class CardHijoComponent implements OnInit {
  ingredientes: Ingredientes[];
  constructor(private http: HttpClient, private _usuarioservice:UsuarioService) {
  }

  ngOnInit() {
    this.mostrar();
  }

  mostrar(){
    this.http.get<Ingredientes[]>(this._usuarioservice.urlnuevaHijos).subscribe((data: Ingredientes[]) => {
      this.ingredientes = data;
      console.log(this.ingredientes.map(data=>data.nombreMarca));
    });
  }


}
