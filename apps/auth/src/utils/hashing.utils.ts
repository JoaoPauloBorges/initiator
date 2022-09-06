import * as bcrypt from 'bcrypt';

export async function encodePassword(rawPassword: string) {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(rawPassword, salt);
}

export async function checkPassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
