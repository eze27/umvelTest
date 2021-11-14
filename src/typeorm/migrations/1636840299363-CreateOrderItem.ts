import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateOrderItem1636840299363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const query = await queryRunner.query(
            `CREATE TABLE "order_item" ("id" SERIAL NOT NULL, "order_id" INT, "item_id" INT,"created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a1Bfb1c0c8416b2fc6f907b7433" PRIMARY KEY ("id"))`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "order_item"`, undefined);
    }

}
