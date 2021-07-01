import {MigrationInterface, QueryRunner} from "typeorm";

export class addProfileEntity1623902619798 implements MigrationInterface {
    name = 'addProfileEntity1623902619798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
