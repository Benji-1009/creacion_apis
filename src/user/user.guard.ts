import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class UserGuard implements CanActivate {
  constructor (private jwtservice: JwtService){}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request)
    if(!token){
      throw new UnauthorizedException()
      
    }
    try{
      await this.jwtservice.verifyAsync(token,{secret: "hola"})
      return true;
    }
    catch{
      throw new UnauthorizedException()
    }
  }
  private extractToken(request: Request){
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}
