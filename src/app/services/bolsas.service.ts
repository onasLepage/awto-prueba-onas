import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BolsaService {

    private bolsas: Bolsa[] = [
        {
            charge: 70000,
            reward: 15000
        },
        {
            charge: 80000,
            reward: 25000
        },
        {
            charge: 90000,
            reward: 35000
        },
        {
            charge: 100000,
            reward: 45000
        },
        {
            charge: 110000,
            reward: 55000
        },
        {
            charge: 120000,
            reward: 65000
        },
    ];

    constructor() {
        console.log('Servicio Listo para usar');
    }

    getBolsas(): Bolsa[] {
        return this.bolsas;
    }

}

export interface Bolsa {
    charge: number;
    reward: number;
}

