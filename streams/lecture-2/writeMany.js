// const fs = require("node:fs/promises");

// Execution Time: 8s
// CPU Usage: 100% (one core)
// Memory Usage: 50MB
// (async () => {
//   console.time("writeMany");
//   const fileHandle = await fs.open("test.txt", "w");

//   for (let i = 0; i < 1000000; i++) {
//     await fileHandle.write(` ${i} `);
//   }
//   console.timeEnd("writeMany");
// })();

// Execution Time: 2.8s
// CPU Usage: 7% (one core)
// Memory Usage: 50MB
import { open, writeSync } from 'node:fs';

(async () => {
  console.time('writeMany');
  open('test.txt', 'w', (err, fd) => {
    for (let i = 0; i < 1000000; i++) {
      const buff = Buffer.from(` ${i} `, 'utf-8');
      writeSync(fd, buff);
    }

    console.timeEnd('writeMany');
  });
})();
