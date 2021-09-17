import { Application } from "../../projects/slash-server/mod.ts";
import commands from "./commands.ts";

if (!(Deno.env.get("CLIENT_ID") && Deno.env.get("PUBLIC_KEY") && Deno.env.get("TOKEN"))) {
    throw Error("Environment variables not set");
}

const app = new Application(
  {
    id: Deno.env.get("CLIENT_ID")!,
    key: Deno.env.get("PUBLIC_KEY")!,
    token: Deno.env.get("TOKEN")!,
  },
  commands
);

app.start();
