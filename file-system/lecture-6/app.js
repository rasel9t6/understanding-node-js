import { open, watch } from "fs/promises";

(async () => {
  const commandFileHandler = await open("./command.txt", "r");

  const watcher = watch("./command.txt");

  for await (const event of watcher) {
    if (event.eventType === "change") {
      // The file was changed...
      console.log(event);

      // get the size of our file
      const size = (await commandFileHandler.stat()).size;
      const buff = Buffer.alloc(size);

      const offset = 0;
      const length = buff.byteLength;
      const position = 0;

      const content = await commandFileHandler.read(
        buff,
        offset,
        length,
        position
      );

      console.log(content);
    }
  }
})();
