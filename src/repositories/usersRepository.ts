import db from "../config/postgres";
import IUserData from "../types/usersTypes";

export async function findByEmail(email: string) {
	const result = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);

	return result.rows[0];
}

export async function insert(userData: IUserData) {
	const { email, password } = userData;
	await db.query(`INSERT INTO users (email, password) VALUES ($1, $2)`, [email, password]);
}

export async function getUserById(id: number) {
	const result = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);

	return result.rows[0];
}
