import { z } from "zod";
import { schema } from "./schema";

export type SignupData = z.infer<typeof schema>;
