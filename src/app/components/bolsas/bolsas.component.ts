import { Component, OnInit } from '@angular/core';
import { BolsaService, Bolsa } from '../../services/bolsas.service';

@Component({
  selector: 'app-bolsas',
  templateUrl: './bolsas.component.html',
  styleUrls: ['./bolsas.component.css']
})
export class BolsasComponent implements OnInit {

  bolsas: Bolsa[] = [];
  constructor(private _BOLSASERVICE: BolsaService) {

  }

  ngOnInit() {

    this.bolsas = this._BOLSASERVICE.getBolsas();
    console.log(this.bolsas);


  }

}



