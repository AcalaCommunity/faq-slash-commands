import {
  Application,
} from "https://raw.githubusercontent.com/brettkolodny/slash-server/main/mod.ts";
import commands from "./commands/mod.ts";

Deno.env.set("CLIENT_ID", "887442889968336987");
Deno.env.set(
  "PUBLIC_KEY",
  "44ea0b11f60503fe9fffe01d745f0b10ad8432b63de39b3ef1ee48a736a93af3"
);
Deno.env.set(
  "TOKEN",
  "ODg3NDQyODg5OTY4MzM2OTg3.YUENmA.3PxECrp-bjpwHUc6ifUKOgWZGuE"
);
Deno.env.set("SERVER_ID", "816392847859122186");

if (
  !(
    Deno.env.get("CLIENT_ID") &&
    Deno.env.get("PUBLIC_KEY") &&
    Deno.env.get("TOKEN")
  )
) {
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
