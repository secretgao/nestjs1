import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly jwtSecret = 'your_jwt_secret';

  validateToken(token: string) {

    console.log(token);
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (e) {

      console.log(e)
      return null;
    }
  }
}

