import express from "express";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3500;
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
	res.json({ message: "alive" });
});

app.get("/tasks", async (req: Request, res: Response) => {
	const currentPage = req.query.page || 1;
	const listPerPage = 5;

	const allTasks = await prisma.task.findMany({
		take: listPerPage,
	});

	res.json({
		data: allTasks,
		meta: { page: currentPage },
	});
});

app.post("/create", async (req: Request, res: Response) => {
	await prisma.task.create({
		data: {
			name: req.body.task,
			description: req.body.description,
			category: req.body.category,
		},
	});

	res.json({ message: "Task created!!!" });
});

app.post("/delete", async (req: Request, res: Response) => {
	await prisma.task.delete({
		where: {
			id: req.body.id,
		},
	});

	res.json({ message: "Task deleted!!!" });
});

app.post("/deleteall", async (req: Request, res: Response) => {
	await prisma.task.deleteMany({});

	res.json({ message: "Tasks deleted!!!" });
});

app.listen(port, () => {
	console.log(`Listening to requests on port ${port}`);
});
