import type { BaseTranslation } from "../i18n-types";

import about from "./about";
import navbar from "./navbar";
import hero from "./hero";
import programmingLanguages from "./programming-languages";
import tools from "./tools";

const en = {
  about,
  navbar,
  hero,
  programmingLanguages,
  tools,
} satisfies BaseTranslation;

export default en;
