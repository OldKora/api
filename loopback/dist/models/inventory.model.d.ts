import { Entity } from '@loopback/repository';
export declare class Inventory extends Entity {
    inventoryId?: string;
    qty: number;
    createdAt: string;
    UpdatedAt: string;
    productId: string;
    [prop: string]: any;
    constructor(data?: Partial<Inventory>);
}
export interface InventoryRelations {
}
export declare type InventoryWithRelations = Inventory & InventoryRelations;
