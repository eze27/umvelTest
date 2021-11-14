import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateOrder1636839101812 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const query = await queryRunner.query(
            `CREATE TABLE "order" ("id" SERIAL NOT NULL, "subtotal" NUMERIC(10,2), "vat" character varying(40), "total" NUMERIC(10,2) NOT NULL, "token" character varying(250), "total_items"  INT , "customer_name" character varying(100),"status" INT, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b2fc6f907b7433" PRIMARY KEY ("id"))`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "order"`, undefined);
    }

}
