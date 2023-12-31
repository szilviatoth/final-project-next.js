import { Sql } from 'postgres';

export async function up(sql: Sql) {

  await sql `

        CREATE TABLE notifications (
        id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id integer REFERENCES users(id),
        message varchar NOT NULL,
        bucket_id integer REFERENCES buckets(id),
        notification_timestamp date
    );
  `;
  }


  export async function down(sql: Sql) {

    await sql `
      DROP TABLE notifications

    `;
  }
