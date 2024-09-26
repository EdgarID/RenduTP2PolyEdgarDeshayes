import { Cart } from "./classes/Cart";
import { Citron } from "./Products";
import { TomateCerise } from "./Products";
import { HuileDOlive } from "./Products";
import { Sucre } from "./Products";

let citron:Citron=new Citron(0.5);
let huile:HuileDOlive=new HuileDOlive(5);
let sucre:Sucre=new Sucre(3.9);
let tomate:TomateCerise=new TomateCerise(3.5);
let cart:Cart=new Cart;
cart.add(citron,2);
cart.add(huile,1.5);
cart.add(sucre,0.5);
cart.add(citron,5);
cart.add(sucre,3);
cart.add(tomate,1.5);

console.log(cart.displayDetails());