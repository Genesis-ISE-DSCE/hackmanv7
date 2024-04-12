import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/error";

interface user {
  id: String;
  email: String;
}

declare global {
  namespace Express {
    interface Request {
      user: user;
    }
  }
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    throw new AppError({ name: "UNAUTHORIZED", message: "Unauthorized!" });

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (err: jwt.VerifyErrors | null, user: any) => {
      if (err)
        throw new AppError({ name: "UNAUTHORIZED", message: "Unauthorized!" });

      req.user = user;

      next();
    }
  );
}

export default authenticateToken;
