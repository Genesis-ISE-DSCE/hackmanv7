import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/error";
import { HttpStatus } from "../utils/statusCodes";
import { ZodError } from "zod";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ success: false, error: err.errors[0].message });
  } else if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ success: false, error: err.message });
  }
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    error: err,
    // error: "Internal Server Error",
  });
};
