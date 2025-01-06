import { open } from 'node:fs/promises';

(async () => {
  console.time('readBig');
  const fileHandleRead = await open('text-gigantic.txt', 'r');
  const fileHandleWrite = await open('dest.txt', 'w');

  const streamRead = fileHandleRead.createReadStream({
    highWaterMark: 64 * 1024,
  });
  const streamWrite = fileHandleWrite.createWriteStream();

  streamRead.on('data', (chunk) => {
    if (!streamWrite.write(chunk)) {
      streamRead.pause();
    }
  });

  streamWrite.on('drain', () => {
    streamRead.resume();
  });
})();
