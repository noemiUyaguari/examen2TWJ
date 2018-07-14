import {EventEmitter, Injectable} from "@angular/core";
import {Ingredientes, Conductor} from "../home/home.component";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioService {
  contador=0;
  parametros;
  urlAutos= 'http://localhost:1337/Conductor';
  urlnueva;
  mostrar=true;
  urlnuevaHijos;
  id; total=0;
  visible=true;
  indiceSeleccionado;
  elmiminartotal=0;
  emitircambioAuto:EventEmitter<number>=new EventEmitter();
  emitircambioCompra:EventEmitter<number>=new EventEmitter();
  emitircambioBusqueda:EventEmitter<string>=new EventEmitter();
  emiircambioEliminar:EventEmitter<boolean>=new EventEmitter();
  emitirCambioTota:EventEmitter<number>=new EventEmitter();

  constructor(private http: HttpClient){

  }
  autos: Ingredientes[];

  colocarTotal(total){
    this.total=total;
    return total;
  }
  cambioCompra(totalCompra){
    this.total=totalCompra;
    this.emitircambioCompra.emit(totalCompra);
  }
 setIndice(indice){
    this.indiceSeleccionado=indice;
 }
  emitirQuitarTotal(cambioAuto:number){
    this. elmiminartotal=cambioAuto;
    this.emitirCambioTota.emit(cambioAuto);
  }
  emitirCambio(cambioAuto:number){
    this.contador=cambioAuto;
    this.emitircambioAuto.emit(cambioAuto);
  }
  emitirEliminar(visible:boolean){
    this.visible=visible;
    this.emiircambioEliminar.emit(visible);
  }
  emitirBusqueda(parametros:string){
    this.parametros=parametros;
    this.emitircambioBusqueda.emit(parametros);
  }
  guardarUrl(urlnueva: string){
    this.urlnueva=urlnueva;
    return urlnueva;
  }

  guardarUrlHijos(urlnuevahijos:string){
    this.urlnuevaHijos=urlnuevahijos;
    return urlnuevahijos;
  }



}
