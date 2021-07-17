import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	const info = await prisma.info.findMany();

	res.status(200).json(info);
}
