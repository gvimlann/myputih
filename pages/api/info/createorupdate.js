import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	const user1 = await prisma.user.findUnique({
		where: {
			email: req.body.email,
		},
	});

	// user is legit
	if (user1 !== null) {
		const info = await prisma.info.findFirst({
			where: {
				userId: user1.id,
			},
		});

		// first time user keyin info
		if (info === null) {
			await prisma.info.create({
				data: {
					contactNumber: req.body.contactNumber,
					needHelp: req.body.needHelp,
					food: req.body.food,
					groceries: req.body.groceries,
					money: req.body.money,
					medical: req.body.medical,
					othersNeed: req.body.othersNeed,
					others: req.body.others,
					latitude: req.body.location[0],
					longitude: req.body.location[1],
					creator: {
						connect: {
							email: req.body.email,
						},
					},
				},
			});
		} else {
			await prisma.info.update({
				data: {
					contactNumber: req.body.contactNumber,
					needHelp: req.body.needHelp,
					food: req.body.food,
					groceries: req.body.groceries,
					money: req.body.money,
					medical: req.body.medical,
					othersNeed: req.body.othersNeed,
					others: req.body.others,
					latitude: req.body.location[0],
					longitude: req.body.location[1],
				},
				where: {
					id: info.id,
				},
			});
		}
	}

	res.status(200).json('Success');
}
