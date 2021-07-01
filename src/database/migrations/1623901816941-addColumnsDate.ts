import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnsDate1623901816941 implements MigrationInterface {
    name = 'addColumnsDate1623901816941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createAt"`);
    }

}
