import { Entity } from '@loopback/repository';
import { Order } from './order.model';
import { UserCredentials, UserCredentialsWithRelations } from './user-credentials.model';
export declare class User extends Entity {
    userId?: string;
    email: string;
    firstName: string;
    lastName: string;
    address?: string;
    phone?: string;
    createdAt: string;
    UpdatedAt: string;
    orders: Order[];
    userCredentials: UserCredentials;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
    userCredentials?: UserCredentialsWithRelations;
}
export declare type UserWithRelations = User & UserRelations;
