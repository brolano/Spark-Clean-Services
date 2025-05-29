import jwt from 'jsonwebtoken';
import { Request } from 'express';

const secret = process.env.JWT_SECRET || 'secret';
const expiration = '2h';

export function signToken(user: { _id: string; name: string; email: string }) {
  const payload = { id: user._id, name: user.name, email: user.email };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

export function authMiddleware({ req }: { req: Request }) {
  let token = req.headers.authorization || '';
  if (token.startsWith('Bearer ')) token = token.slice(7).trim();
  try {
    const { data } = jwt.verify(token, secret) as any;
    req.user = data;
  } catch (err) {
    console.log('Invalid token');
  }
  return { user: req.user };
}