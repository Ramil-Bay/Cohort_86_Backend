import { Module } from '@nestjs/common';
import { CarsModule } from './modules/cars/cars.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { PoliciesModule } from './modules/policies/policies.module.js';

@Module({
  imports: [CarsModule, UsersModule, PoliciesModule],
})
export class AppModule {}
