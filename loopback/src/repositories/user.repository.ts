import {DefaultCrudRepository, HasOneRepositoryFactory, repository} from '@loopback/repository';
import {User, UserRelations, UserCredentials} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { UserCredentialsRepository } from './user-credentials.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.userId,
  UserRelations
> {
  public readonly userCredentials: HasOneRepositoryFactory<
    UserCredentials,
    typeof User.prototype.userId
  >
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter('UserCredentialsRepository')
    getUserCredentialsRepository: Getter<UserCredentialsRepository>
  ) {
    super(User, dataSource);

    this.userCredentials = this.createHasOneRepositoryFactoryFor(
      'userCredentials',
      getUserCredentialsRepository
    );

    this.registerInclusionResolver('userCredentials', this.userCredentials.inclusionResolver);
  }
}
