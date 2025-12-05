import { z } from "zod";

export const branchOptionSchema = z.enum(["A", "B"]);
export type BranchOption = z.infer<typeof branchOptionSchema>;

export const videoIdSchema = z.enum(["OP", "optionA", "optionB"]);
export type VideoId = z.infer<typeof videoIdSchema>;

export const videoSourceMapSchema = z.record(videoIdSchema, z.string());
export type VideoSourceMap = z.infer<typeof videoSourceMapSchema>;
