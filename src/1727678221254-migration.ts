import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1727678221254 implements MigrationInterface {
    name = 'Migration1727678221254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), UNIQUE INDEX \`IDX_01eea41349b6c9275aec646eee\` (\`phone_number\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`new_appilication\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`label\` varchar(255) NOT NULL, \`token\` varchar(255) NOT NULL, \`endpoint\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`label\` varchar(255) NOT NULL, \`token\` varchar(255) NOT NULL, \`endpoint\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`log\``);
        await queryRunner.query(`DROP TABLE \`new_appilication\``);
        await queryRunner.query(`DROP INDEX \`IDX_01eea41349b6c9275aec646eee\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
