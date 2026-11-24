// Famous Last Words at 1 Percent — make.fun entry (program/v1, Node 22, stdlib only).
// Writes the phone's one-line farewell to /output/entry.txt.
// Gate: UTF-8 text, 1-199 characters, not only whitespace, single line.
import { mkdirSync, writeFileSync } from "node:fs";

// Final: tighter and funnier — "love watching" gives the phone a mischievous
// voice, "like the house is on fire" is a sharper image than "how fast you
// run", and dropping "when you think I'm dying" removes a redundant clause
// so the punch ("Worth it.") lands sooner. Pure ASCII, no em-dash.
const ENTRY =
  "I've been at 1 percent since lunch. I just love watching you sprint for the charger like the house is on fire. Worth it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
