import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMigrations1685102431827 implements MigrationInterface {
    name = 'CreateMigrations1685102431827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."clients_status_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."clients_status_enum" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "status" "public"."clients_status_enum" NOT NULL DEFAULT 'active'`);
    }

}
