import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { User, UserRelations, UserCredentials } from '../models';
import { MongoDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { UserCredentialsRepository } from './user-credentials.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.userId, UserRelations> {
    readonly userCredentials: HasOneRepositoryFactory<UserCredentials, typeof User.prototype.userId>;
    constructor(dataSource: MongoDataSource, getUserCredentialsRepository: Getter<UserCredentialsRepository>);
}
