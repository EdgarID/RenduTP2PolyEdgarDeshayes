import type { Product } from "./Interfaces/IProduct"

export class Citron implements Product {
    quantity: number = 0;
    unitPrice: number;
    getPrice(): number {
        return (this.quantity * this.unitPrice);
    }
    constructor(p:number){
        this.unitPrice=p;
    }
    txt(): string {
        let dizaine:string;
        if (this.getPrice()<10){dizaine=" ";
        }else{dizaine=""}
        return ("Citron:\t" + this.quantity + "\t" + this.unitPrice.toFixed(2) + " €\t\t" + dizaine + this.getPrice().toFixed(2) + " €\t");
    }
}
export class TomateCerise implements Product {
    quantity: number = 0;
    pricePerKg: number;
    getPrice(): number {
        return (this.quantity * this.pricePerKg);
    }
    constructor(p: number) {
        this.pricePerKg = p;
    }
    txt(): string {
        let dizaine: string;
        if (this.getPrice() < 10) {
            dizaine = " ";
        } else { dizaine = "" }
        return ("Tomate cerise:\t" + this.quantity + " kg\t" + this.pricePerKg.toFixed(2) + " €/kg\t" + dizaine + this.getPrice().toFixed(2) + " €\t");
    }
}
export class HuileDOlive implements Product {
    quantity: number = 0;
    pricePerLiter: number;
    getPrice(): number {
        return (this.quantity * this.pricePerLiter);
    }
    constructor(p: number) {
        this.pricePerLiter = p;
    }
    txt(): string {
        let dizaine: string;
        if (this.getPrice() < 10) {
            dizaine = " ";
        } else { dizaine = "" }
        return ("Huile d'olive:\t" + this.quantity + " L\t" + this.pricePerLiter.toFixed(2) + " €/L\t" + dizaine + this.getPrice().toFixed(2) + " €\t");
    }
}
export class Sucre implements Product {
    quantity: number = 0;
    pricePerKg: number;
    getPrice(): number {
        return (this.quantity * this.pricePerKg);
    }
    constructor(p: number) {
        this.pricePerKg = p - 1 + 2 * Math.random();
    }
    txt(): string {
        let dizaine: string;
        if (this.getPrice() < 10) {
            dizaine = " ";
        } else { dizaine = "" }
        return ("Sucre:\t\t" + this.quantity + " kg\t" + this.pricePerKg.toFixed(2) + " €/kg\t" + dizaine + this.getPrice().toFixed(2) +" €\t");
    }
}

