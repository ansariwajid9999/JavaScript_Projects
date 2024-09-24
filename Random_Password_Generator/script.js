function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumber,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqsrtuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumber ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  if (length <= 0) {
    return `(password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(At least set of charcater needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumber,
  includeSymbols
);

console.log(`Generated password: ${password}`);
