import { Command } from "https://raw.githubusercontent.com/brettkolodny/slash-server/main/mod.ts";

export function mdToCommands(mdString: string): Command[] {
  const lines = mdString.split("\n");
  const commands: Command[] = [];

  let command = new Command();
  let response: string[] = [];
  lines.forEach((line) => {
    line = line.trim();
    if (line.startsWith("###")) {
      command.description = line.slice(3).trim();
      if (command.description.length > 100) {
        console.error(`Command: ${command.name} description too long`);
      }
    } else if (line.startsWith("##")) {
      if (command.name) {
        command.response = response.join("\n");
        commands.push(command);

        command = new Command();
        response = [];
      }

      command.name = line.slice(2).trim();
    } else if (line.startsWith("#")) {
      return;
    } else {
      response.push(line);
    }
  });

  command.response = response.join("\n");
  commands.push(command);

  return commands;
}
