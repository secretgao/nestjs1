import * as jwt from 'jsonwebtoken';
export declare class AuthService {
    private readonly jwtSecret;
    validateToken(token: string): string | jwt.JwtPayload;
}
