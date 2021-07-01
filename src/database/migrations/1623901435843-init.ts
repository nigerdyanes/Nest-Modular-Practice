import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1623901435843 implements MigrationInterface {
  name = 'init1623901435843';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "dni" integer NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
