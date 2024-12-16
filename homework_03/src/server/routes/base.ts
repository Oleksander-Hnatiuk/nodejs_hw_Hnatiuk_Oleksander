import { Router, Request, Response, NextFunction } from "express";

const router = Router();

interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [];

router.get("/", (req: Request, res: Response) => {
  res.send('Hello world!');
});

router.post("/users", (req: Request, res: Response, next: NextFunction ) => {
  const { name, age } = req.body;
  if (!name || !age) {
    const error = new Error("Name and Age is required");
    res.status(400); // я пишу 400, а в постмеі вертає 500. відпрацьовує globalErrorHandler але чому
    return next(error);
  }

  const newUser: User = { id: users.length + 1, name, age };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.get("/healthcheck", (req: Request, res: Response) => {
  const response = {
    live: true,
    timestamp: new Date().toISOString()
  };

  res.json(response);
});

export default router;