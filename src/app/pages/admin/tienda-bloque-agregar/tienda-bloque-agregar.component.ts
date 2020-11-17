import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tienda-bloque-agregar',
  templateUrl: './tienda-bloque-agregar.component.html',
  styleUrls: ['./tienda-bloque-agregar.component.css']
})
export class TiendaBloqueAgregarComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  openLG(contenido) {
    this.modal.open(contenido, {size: 'lg'});
  }

}
