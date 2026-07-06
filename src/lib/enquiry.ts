import { z } from "zod";

// ─── Shared Zod Validation Schema ───────────────────────────────────────
export const enquirySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .trim(),
  mobile: z
    .string({ required_error: "Mobile number is required" })
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .trim(),
  email: z
    .string({ required_error: "Email is required" })
    .email("Enter a valid email address")
    .trim()
    .toLowerCase(),
  course: z
    .string({ required_error: "Please select a course" })
    .min(1, "Please select a course"),
  message: z
    .string()
    .max(1000, "Message must not exceed 1000 characters")
    .optional()
    .transform(val => val || ""),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
