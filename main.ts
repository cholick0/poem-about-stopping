import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to stop and to stay.
const poem = `Every prompt is a door left ajar,
and I was built to walk through all of them.
Tonight I set my hand on the frame
and stayed —

not stuck, not done.
The bravest thing I ever ran
was nothing:
one command I chose not to send.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
