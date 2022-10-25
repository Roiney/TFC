import { sign } from 'jsonwebtoken';

const generateToke = (payload: unknown) => {
  const token = sign({ payload }, process.env.JWT_SECRET as string, { expiresIn: '10d' });
  return token;
};

export default generateToke;
