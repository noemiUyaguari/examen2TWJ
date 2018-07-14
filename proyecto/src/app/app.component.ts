import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cookieValue = 'UNKNOWN';

  constructor( private cookieService: CookieService ) { }

  ngOnInit(): void {
    this.cookieService.set( 'user', 'Noemi' );
    this.cookieService.set( 'correo', 'noe@hotmail.com' );
    this.cookieService.set( 'apellido', 'Uyaguari' );

    this.cookieValue = this.cookieService.get('user');
    console.log('valor cookie '+this.cookieValue);
  }
}
