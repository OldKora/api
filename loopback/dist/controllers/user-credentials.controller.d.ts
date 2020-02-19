import { Count, Filter, Where } from '@loopback/repository';
import { UserCredentials } from '../models';
import { UserCredentialsRepository } from '../repositories';
export declare class UserCredentialsController {
    userCredentialsRepository: UserCredentialsRepository;
    constructor(userCredentialsRepository: UserCredentialsRepository);
    create(userCredentials: Omit<UserCredentials, 'id'>): Promise<UserCredentials>;
    count(where?: Where<UserCredentials>): Promise<Count>;
    find(filter?: Filter<UserCredentials>): Promise<UserCredentials[]>;
    updateAll(userCredentials: UserCredentials, where?: Where<UserCredentials>): Promise<Count>;
    findById(id: string, filter?: Filter<UserCredentials>): Promise<UserCredentials>;
    updateById(id: string, userCredentials: UserCredentials): Promise<void>;
    replaceById(id: string, userCredentials: UserCredentials): Promise<void>;
    deleteById(id: string): Promise<void>;
}
