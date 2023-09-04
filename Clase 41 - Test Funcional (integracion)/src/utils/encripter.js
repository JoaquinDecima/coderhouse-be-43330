import bcrypt from 'bcrypt';

const saltRounds = 5;
const salt = bcrypt.genSaltSync(saltRounds);

export const encryptPassword = (password) => {
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword = (password, hash) => {
  const result = bcrypt.compareSync(password, hash);
  return result;
}