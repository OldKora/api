import { Entity } from '@loopback/repository';
export declare class ShoppingCart extends Entity {
    id: string;
    constructor(data?: Partial<ShoppingCart>);
}
export interface ShoppingCartRelations {
}
export declare type ShoppingCartWithRelations = ShoppingCart & ShoppingCartRelations;
