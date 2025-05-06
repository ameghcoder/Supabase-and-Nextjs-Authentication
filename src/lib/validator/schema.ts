import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Please enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
      "Password must include uppercase, lowercase, number, and special character"
    ),

  username: z
    .string()
    .min(5, "Username must be at least 5 characters")
    .max(25, "Username must be at most 25 characters")
    .regex(
      /^[a-z0-9_]+$/,
      "Only lowercase letters, numbers, and underscores allowed"
    ),

  fullName: z
    .string()
    .min(3, "Full name can't be empty")
    .max(100, "Full name must be under 100 characters")
    .regex(
      /^[A-Za-z\s.'-]+$/,
      "Full name can include only letters, spaces, dots, hyphens, and apostrophes"
    ),

  string: z.string(),

  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number must be at most 15 digits")
    .regex(
      /^\+?[0-9]{10,15}$/,
      "Mobile number should only contain digits, and optionally start with +"
    ),

  url: z
    .string()
    .url("Enter a valid URL")
    .refine((url) => url.startsWith("https://"), {
      message: "URL must start with https://",
    }),

  uuid: z.string().uuid(),
});
