import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1769033896200 implements MigrationInterface {
    name = ' $npmConfigName1769033896200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nome_usuario" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "status" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido_item" ("id" SERIAL NOT NULL, "pedido_id" integer NOT NULL, "item_id" integer NOT NULL, "quantidade" integer NOT NULL, "preco_unitario" integer NOT NULL, "observacao" character varying NOT NULL, CONSTRAINT "PK_debcac4cf65cba2bec324d55415" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cliente_id" integer NOT NULL, "status" character varying NOT NULL, "valor_total" integer NOT NULL, "criado_em" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_af8d8b3d07fae559c37f56b3f43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "receita" ("id" SERIAL NOT NULL, "item_id" integer NOT NULL, "ingrediente_id" integer NOT NULL, "quantidade" integer NOT NULL, "unidade" character varying NOT NULL, CONSTRAINT "PK_2b53bc8637e0b3fbc7978646d73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "ativo" boolean NOT NULL, "unidade_medida" character varying NOT NULL, "minimo_necessario" integer NOT NULL, "aceitar_pedido" boolean NOT NULL, "vende" boolean NOT NULL, "controla_estoque" boolean NOT NULL, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "preco_item" ("id" SERIAL NOT NULL, "item_id" integer NOT NULL, "valor" integer NOT NULL, "alterado_em" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_76774716e3284151f0024ce9831" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lancamento_financeiro" ("id" SERIAL NOT NULL, "tipo" character varying NOT NULL, "valor" integer NOT NULL, "categoria" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "referencia_id" integer NOT NULL, CONSTRAINT "PK_0df03b486ed3646e722771d86bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lote" ("id" SERIAL NOT NULL, "item_id" integer NOT NULL, "data_validade" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_db72652dca29e9e818c3c10abed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estoque" ("id" SERIAL NOT NULL, "item_id" integer NOT NULL, "lote_id" integer NOT NULL, "quantia_atual" integer NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_261e2d9d708b7e0ca5dd8340bc2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "telefone" integer NOT NULL, "endereco" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "estoque"`);
        await queryRunner.query(`DROP TABLE "lote"`);
        await queryRunner.query(`DROP TABLE "lancamento_financeiro"`);
        await queryRunner.query(`DROP TABLE "preco_item"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "receita"`);
        await queryRunner.query(`DROP TABLE "pedido"`);
        await queryRunner.query(`DROP TABLE "pedido_item"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
