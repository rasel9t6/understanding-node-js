import { watch } from "node:fs/promises";

(async () => {
  const watcher = watch("./command.txt");

  for await (const event of watcher) {
    if (event.eventType === "change") {
      // The file was changed...
      console.log(event);
    }
  }
})();
