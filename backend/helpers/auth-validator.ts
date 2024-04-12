import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email should have atleast 3 characters" })
    .max(255, { message: "email must not be more than 255 characters" }),

  password: z.string({ required_error: "Password is Required" }),
});

export const teamNameSchema = z.object({
  teamName: z.string(),
});

export const memberSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),

  emaiL: z
    .string()
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email should have atleast 3 characters" })
    .max(255, { message: "email must not be more than 255 characters" }),

  phoneNumber: z
    .string()
    .trim()
    .min(10, { message: "Phone Number Should Have minimum 10 Digits" })
    .max(10, { message: "Phone number should have max 10 digits" }),
});

export const githubSchema = z.object({
  githubLink: z.string().url(),
});

const leaderSchema = z.object({
  name: z.string(),
  email: z.string().email(), // Ensure email format is valid
  phoneNumber: z
    .string()
    .min(10, { message: "min 10 Digits" })
    .max(10, { message: "Max 10 digits allowed" }), // You might want to add more validation rules for phone numbers
});

// Define schema for the teamInfo object
const teamInfoSchema = z.object({
  name: z.string(),
});

// Combine the schemas for leader and teamInfo into a single schema
export const registrationSchema = z.object({
  leader: leaderSchema,
  teamInfo: teamInfoSchema,
});
