import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tienda-design',
  templateUrl: './tienda-design.component.html',
  styleUrls: ['./tienda-design.component.css']
})
export class TiendaDesignComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  openLG(contenido) {
    this.modal.open(contenido, {size: 'lg'});
  }
}
