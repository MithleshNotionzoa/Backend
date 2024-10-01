import { User } from "../../auth/user/entities/user.entity";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateUser implements Seeder {
    public async run(factory: Factory, connection: DataSource): Promise<any> {
        await factory(User)().createMany(1)
    }
}