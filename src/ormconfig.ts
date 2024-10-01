import { triggerAsyncId } from "async_hooks";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { SeederConstructor } from "typeorm-seeding/dist/types";
import { User } from "./auth/user/entities/user.entity";
import { NewAppilication } from "./new-appilication/entities/new-appilication.entity";
import { Log } from "./logs/entities/log.entity";


export const dataSourceOptions: DataSourceOptions & SeederOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Mithleshkr$12',
    database: 'testdb',
    entities: [User, NewAppilication, Log],
    // autoLoadEntities: true,
    migrations: ['dist/migration/*.js'],
    synchronize: false,
    logging: true,
    seeds: ['./src/database/seeds/**/*.ts'],
    factories: ['./src/database/factories/**/*.ts']


}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource;