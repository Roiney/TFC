import { verify } from 'jsonwebtoken';
import { IJWT } from '../interfaces/IJwt';

const decodeToken = (token: string) => {
  console.log('decode', token);

  const { payload }= verify(token, process.env.JWT_SECRET as string) as IJWT;
  console.log(payload);

  return payload;
};

export default decodeToken;
