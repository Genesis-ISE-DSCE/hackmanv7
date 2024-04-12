import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email should have atleast 3 characters" })
    .max(255, { message: "email must not be more than 255 characters" }),

  password: z.string(),
});

export const teamNameSchema = z.object({
  teamName: z.string().trim(),
});

export const editMemberSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" })
    .optional(),

  email: z
    .string()
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email should have atleast 3 characters" })
    .max(255, { message: "email must not be more than 255 characters" })
    .optional(),

  phoneNumber: z
    .string()
    .trim()
    .min(10, { message: "Phone Number Should Have minimum 10 Digits" })
    .max(10, { message: "Phone number should have max 10 digits" })
    .optional(),
});

export const memberSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),

  email: z
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
  email: z
    .string()
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email should have atleast 3 characters" })
    .max(255, { message: "email must not be more than 255 characters" }),
  phoneNumber: z
    .string()
    .min(10, { message: "min 10 Digits" })
    .max(10, { message: "Max 10 digits allowed" }),
});

const teamInfoSchema = z.object({
  name: z.string(),
});

export const registrationSchema = z.object({
  leader: leaderSchema,
  teamInfo: teamInfoSchema,
});
