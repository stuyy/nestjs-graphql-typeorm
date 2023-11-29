import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { User } from 'src/graphql/models/User';
import { UserSettingService } from './UserSettingService';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { UserSettingsResolver } from 'src/graphql/resolvers/UserSettingsResolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    UserService,
    UserSettingService,
    UserSettingsResolver,
  ],
})
export class UsersModule {}
