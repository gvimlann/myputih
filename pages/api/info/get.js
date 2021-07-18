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

	const info = await prisma.info.findMany({
		select: {
			contactNumber: true,
			food: true,
			groceries: true,
			latitude: true,
			longitude: true,
			medical: true,
			money: true,
			needHelp: true,
			others: true,
			othersNeed: true,
		},
	});

	res.status(200).json(info);
}
