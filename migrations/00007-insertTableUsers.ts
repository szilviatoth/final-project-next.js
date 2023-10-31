import { Sql } from 'postgres';

const users = [
  {
      id: 1,
      first_name: 'Szilvia',
      last_name: 'Toth',
      username: 'sziszi',
      password_hash: 'hashedpassword',
      email: 'xy@gmail.com',
      google_id: null,
      ui_preference: false
  },
];


export async function up(sql: Sql) {
  for (const user of users) {
    await sql `
    INSERT INTO users
    (first_name, last_name, username, password_hash, email, google_id, ui_preference)
    VALUES

        (${user.first_name}, ${user.last_name}, ${user.username}, ${user.password_hash}, ${user.email}, ${user.google_id}, ${user.ui_preference}
        )
  `;
  }
}

export async function down(sql: Sql) {
  for (const user of users) {

    await sql`

      DELETE FROM admin WHERE id = ${user.id}

    `;
  }
}
