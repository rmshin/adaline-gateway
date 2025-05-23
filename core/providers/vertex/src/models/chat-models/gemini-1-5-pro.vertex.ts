import { z } from "zod";

import { Gemini1_5ProSchema as Google_Gemini1_5ProSchema } from "@adaline/google";

import pricingData from "../pricing.json";
import { BaseChatModelOptions, BaseChatModelVertex } from "./base-chat-model.vertex";

const Gemini1_5ProLiteral = "gemini-1.5-pro" as const;
const Gemini1_5ProSchema = {
  ...Google_Gemini1_5ProSchema,
  price: pricingData[Gemini1_5ProLiteral],
} as const;

const Gemini1_5ProOptions = BaseChatModelOptions;
type Gemini1_5ProOptionsType = z.infer<typeof Gemini1_5ProOptions>;

class Gemini1_5Pro extends BaseChatModelVertex {
  constructor(options: Gemini1_5ProOptionsType) {
    super(Gemini1_5ProSchema, options);
  }
}

export { Gemini1_5Pro, Gemini1_5ProLiteral, Gemini1_5ProOptions, Gemini1_5ProSchema, type Gemini1_5ProOptionsType };
