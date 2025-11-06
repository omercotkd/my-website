import type { Translation } from "../i18n-types";

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
import footer from "./footer";

const he = {
  about,
  navbar,
  hero,
  howStarted,
  experience,
  aboutQa,
  tools,
  programmingLanguages,
  dbs,
  certificates,
  footer
} satisfies Translation;

export default he;
