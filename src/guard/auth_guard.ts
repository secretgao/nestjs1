import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector, private authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    let token = '';
    if (authHeader) {
       token = authHeader.split(' ')[1];
    }
    if (!token) {
      throw new UnauthorizedException('缺少授权令牌');
    }
    const user = this.authService.validateToken(token);
    if (!user) {
      throw new UnauthorizedException('无效的授权令牌');
    }

    request.user = user;
    console.log(user);
    return true;
  }
}
