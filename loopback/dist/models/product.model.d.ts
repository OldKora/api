import { Entity } from '@loopback/repository';
import { Inventory } from './inventory.model';
export declare class Product extends Entity {
    productId?: string;
    name: string;
    price: number;
    image: string;
    description?: string;
    details?: string;
    createdAt: string;
    UpdatedAt: string;
    inventories: Inventory[];
    [prop: string]: any;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
    inventories?: Inventory[];
}
export declare type ProductWithRelations = Product & ProductRelations;
