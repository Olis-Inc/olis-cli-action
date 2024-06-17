import { getInput } from "@actions/core";

const message = getInput("message");
// const githubToken = getInput("githubToken");
// eslint-disable-next-line no-console
console.log(`Yo homie, ${message}!`);
