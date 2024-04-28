import bcrypt from "bcryptjs";

export interface LoginCredentials {
  userName: string,
  password: string,
}

export const SALT_ROUNDS = 10;

/**
 * hash a given password
 * @param password 
 * @returns 
 */
export const hashPassword = (password: string): Promise<string> => {
  try {
    return bcrypt.hash(password, SALT_ROUNDS);
  } catch (error) {
    console.error('Error while Hashing password : ', error)
    throw error;
  }
}

/**
 * decode a retrieved hashed password and compare it with the clear one
 * @param password 
 * @param hashedPassword 
 * @returns 
 */
export const comparePassword = (password: string, hashedPassword: string): Promise<boolean> => {
  try {
    return bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error('Error while comparing password : ', error);
    throw error;
  }
}
