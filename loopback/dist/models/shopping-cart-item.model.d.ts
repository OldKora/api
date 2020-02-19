import { Entity } from '@loopback/repository';
export declare class ShoppingCartItem extends Entity {
    id: string;
    qty: number;
    price?: number;
    [prop: string]: any;
    constructor(data?: Partial<ShoppingCartItem>);
}
export interface ShoppingCartItemRelations {
}
export declare type ShoppingCartItemWithRelations = ShoppingCartItem & ShoppingCartItemRelations;
