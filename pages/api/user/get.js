import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	const user = await prisma.user.findUnique({
		where: {
			email: req.body.email,
		},
	});

	if (user === null) {
		await prisma.user.create({
			data: {
				name: req.body.name,
				email: req.body.email,
			},
		});
	}

	res.status(200).json('Success');
}
