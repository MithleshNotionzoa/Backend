import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './ormconfig';
import { NewAppilicationModule } from './new-appilication/new-appilication.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions)
    , GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql")
    }), AuthModule, NewAppilicationModule, LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
