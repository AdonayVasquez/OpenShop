import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-gestion',
  templateUrl: './plan-gestion.component.html',
  styleUrls: ['./plan-gestion.component.css']
})
export class PlanGestionComponent implements OnInit {

  constructor() { }

  // planes: any = [];

  planes = [
    {
      id: 1,
      plan: 'Basico',
      cantidad_temas: 10,
      cantidad_paginas: 3,
      cantidad_cuentas: 1,
      capacidad_almacenamiento: 100
    },

    {
      id: 2,
      plan: 'Pro',
      cantidad_temas: 20,
      cantidad_paginas: 10,
      cantidad_cuentas: 10,
      capacidad_almacenamiento: 500
    },

  ];

  ngOnInit(): void {

  }


}
