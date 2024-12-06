import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ApiResponseReturn } from '../common/api-response-return';
@Injectable()
export class AuthService {
  private readonly jwtSecret = 'your_jwt_secret';

  validateToken(token: string) {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (e) {
      if (e.name === 'TokenExpiredError') {
        // 令牌过期错误
        throw new UnauthorizedException('已失效，请重新登录');
      } else {
        // 其他验证错误     
        throw new UnauthorizedException('请重新登录');
      }
     
    }
  }
}

