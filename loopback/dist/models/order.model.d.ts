import { Entity } from '@loopback/repository';
export declare class Order extends Entity {
    orderId?: string;
    total: number;
    createdAt: string;
    UpdatedAt: string;
    [prop: string]: any;
    constructor(data?: Partial<Order>);
}
export interface OrderRelations {
}
export declare type OrderWithRelations = Order & OrderRelations;
