import { test } from "node:test";
import assert from "node:assert";
import { formatUptime } from "./formatUptime.js";

test("formats seconds into h/m/s string", () => {
  assert.strictEqual(formatUptime(3661), "1h 1m 1s");
});

test("handles zero seconds", () => {
  assert.strictEqual(formatUptime(0), "0h 0m 0s");
});

test("handles values under a minute", () => {
  assert.strictEqual(formatUptime(45), "0h 0m 45s");
});