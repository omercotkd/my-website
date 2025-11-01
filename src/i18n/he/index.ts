import type { Translation } from "../i18n-types";

import about from "./about";
import navbar from "./navbar";
import hero from "./hero";
import programmingLanguages from "./programming-languages";
import tools from "./tools";
import dbs from "./dbs";

const he = {
  about,
  navbar,
  hero,
  tools,
  programmingLanguages,
  dbs,
} satisfies Translation;

export default he;
