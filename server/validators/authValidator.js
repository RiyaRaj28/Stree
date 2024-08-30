const { z } = require("zod");

const registerSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(255, { message: "Password must not be more than 255 characters" }),
  userName: z
    .string({ required_error: "User name is required" })
    .trim()
    .min(3, { message: "User name must be at least of 3 characters." })
    .max(255, { message: "User name must not be more than 255 characters" }),
});

const loginSchema = z.object({
  userName: z
    .string({ required_error: "User name is required" })
    .trim()
    .min(3, { message: "User name must be at least of 3 characters." })
    .max(255, { message: "User name must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(255, { message: "Password must not be more than 255 characters" })
});

module.exports = {
  registerSchema,
  loginSchema
};