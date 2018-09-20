import RandExp from "randexp";

export default function generatePassword(options) {
  let range = "";

  if (options.letters) range += "a-zA-Z";
  if (options.numbers) range += "0-9";
  if (options.symbols) range += "!@#$%^&*)(+=._-";

  let expression = `[${range}]{${options.chars}}`;
  let generated = new RandExp(expression).gen();

  return generated;
}
