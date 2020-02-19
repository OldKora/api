import { Entity } from '@loopback/repository';
import { UserWithRelations } from './user.model';
export declare class UserCredentials extends Entity {
    id?: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    [prop: string]: any;
    constructor(data?: Partial<UserCredentials>);
}
export interface UserCredentialsRelations {
    user?: UserWithRelations;
}
export declare type UserCredentialsWithRelations = UserCredentials & UserCredentialsRelations;
