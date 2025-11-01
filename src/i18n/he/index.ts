import type { Translation } from "../i18n-types";

import about from "./about";
import navbar from "./navbar";
import hero from "./hero";
import programmingLanguages from "./programming-languages";
import tools from "./tools";
import dbs from "./dbs";
import aboutQa from "./about-qa";
import certificates from "./certificates";

const he = {
  about,
  navbar,
  hero,
  aboutQa,
  tools,
  programmingLanguages,
  dbs,
  certificates
} satisfies Translation;

export default he;
