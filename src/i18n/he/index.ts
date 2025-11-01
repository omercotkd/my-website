import type { Translation } from "../i18n-types";

import about from "./about";
import navbar from "./navbar";
import hero from "./hero";
import programmingLanguages from "./programming-languages";
import tools from "./tools";

const he = {
  about,
  navbar,
  hero,
  tools,
  programmingLanguages,
} satisfies Translation;

export default he;
