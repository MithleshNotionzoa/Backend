import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLog1727678034830 implements MigrationInterface {
    name = 'CreateLog1727678034830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`label\` varchar(255) NOT NULL, \`token\` varchar(255) NOT NULL, \`endpoint\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`log\``);
    }

}
