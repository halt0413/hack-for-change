import { z } from "zod";

export const homeHandlersSchema = z.object({
  onStart: z.custom<() => void>((val) => typeof val === "function", {
    message: "onStart",
  }),
  onOpenWeb: z.custom<() => void>((val) => typeof val === "function", {
    message: "onOpenWeb",
  }),
});
export type HomeHandlers = z.infer<typeof homeHandlersSchema>;
