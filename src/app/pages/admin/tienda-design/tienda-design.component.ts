import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tienda-design',
  templateUrl: './tienda-design.component.html',
  styleUrls: ['./tienda-design.component.css']
})
export class TiendaDesignComponent implements OnInit {

  bloques: any = [];
  bloque: any = {
  };
  numero: string = '8';
  numero2: string = '4';

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  guardarBloque() {
    this.bloques.push(
      {
        posicion: this.bloque.posicion,
        desktop: this.bloque.colDesktop,
        mobile: this.bloque.colMobile
      }
    );

    console.log(this.bloques);
  }

  openLG(contenido) {
    this.modal.open(contenido, {size: 'lg'});
  }
}
