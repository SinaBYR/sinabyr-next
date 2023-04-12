import bcrypt from 'bcrypt';

export async function verifyPassword(password, hashedPassword) {
  const match = await bcrypt.compare(password, hashedPassword)
  return match;
}