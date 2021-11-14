import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateItem1636840173323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const query = await queryRunner.query(
            `CREATE TABLE "item" ("id" SERIAL NOT NULL, "price" NUMERIC(10,2), "name" character varying(40),"created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a1ffb1c0c8416b2fc6f907b7433" PRIMARY KEY ("id"))`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item"`, undefined);
    }

}
