import { z } from "zod";

export const branchOptionSchema = z.enum(["1", "2"]);
export type BranchOption = z.infer<typeof branchOptionSchema>;

export const videoIdSchema = z.enum(["OP", "ED1", "ED2"]);
export type VideoId = z.infer<typeof videoIdSchema>;

export const videoSourceSchema = z.object({
  id: videoIdSchema,
  src: z.string().min(1, "動画パスを指定してください"),
});
export type VideoSource = z.infer<typeof videoSourceSchema>;
