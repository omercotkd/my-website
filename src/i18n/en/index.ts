import type { BaseTranslation } from "../i18n-types";

import about from "./about";
import navbar from "./navbar";
import hero from "./hero";
import programmingLanguages from "./programming-languages";
import tools from "./tools";
import dbs from "./dbs";

const en = {
  about,
  navbar,
  hero,
  programmingLanguages,
  tools,
  dbs,
} satisfies BaseTranslation;

export default en;
