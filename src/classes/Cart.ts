import type { Product } from "../Interfaces/IProduct"

export class Cart{
    orderLines: Array<Product> = [];

    add(p:Product,q:number){
        p.quantity+=q;
        let b=true;
        for (let i = 0; i < this.orderLines.length; i++) {
            if(b&&this.orderLines[i]==p){
                b=false;
            }
        }
        if (b) {this.orderLines.push(p);}
    }

    calculateAmountByProduct(p:Product):number{
        return(p.getPrice());
    }

    calculateAmount():number{
        let somme=0;
        for(let i=0;i<this.orderLines.length;i++){
            somme +=this.calculateAmountByProduct(this.orderLines[i]);
        }
        return(somme);
    }

    displayDetails():string{
        let message="+-----------------------------------------------+\n";
        for (let i = 0; i < this.orderLines.length; i++) {
            message += "|"+this.orderLines[i].txt()+"|\n";
        }
        message += "+-----------------------------------------------+\n";
        message += "|Total:\t\t\t\t\t" + this.calculateAmount().toFixed(2) + " €\t|\n";
        message += "+-----------------------------------------------+\n";
        return(message);
    }

}