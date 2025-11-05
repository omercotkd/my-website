import type { BaseTranslation } from "../i18n-types";

import about from "./about";
import navbar from "./navbar";
import hero from "./hero";
import programmingLanguages from "./programming-languages";
import tools from "./tools";
import dbs from "./dbs";
import aboutQa from "./about-qa";
import certificates from "./certificates";
import experience from "./experience";
import howStarted from "./how-started";

const en = {
  about,
  navbar,
  hero,
  howStarted,
  experience,
  aboutQa,
  programmingLanguages,
  tools,
  dbs,
  certificates
} satisfies BaseTranslation;

export default en;
