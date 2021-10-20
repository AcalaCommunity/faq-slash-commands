import { CommandGroup } from "https://raw.githubusercontent.com/brettkolodny/slash-server/0a7662f8e4de7d86295881ea432ea4ea1efac2e8/mod.ts";
import { mdToCommands } from "../utils.ts";
import crowdloanFAQ from "./crowdloan-faq.ts";
import generalFAQ from "./general-faq.ts";

if (!Deno.env.get("SERVER_ID")) throw Error("Environment variables not set");
const SERVER_ID = Deno.env.get("SERVER_ID")!;

const crowdloanFaqSubCommands = mdToCommands(crowdloanFAQ);
const crowdloanFaqCommands = new CommandGroup(
  "crowdloan",
  "Crowdloan FAQs",
  SERVER_ID,
  crowdloanFaqSubCommands
);

const generalFaqSubCommands = mdToCommands(generalFAQ);
const generalFaqCommands = new CommandGroup(
  "faq",
  "General FAQs",
  SERVER_ID,
  generalFaqSubCommands
);

export default [crowdloanFaqCommands, generalFaqCommands];
