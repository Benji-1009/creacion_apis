import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor (private jwtservice: JwtService){} 
    private readonly users = [
        {
            id: 1,
            username: 'admin',
            password: 'password'
        }
    ]
    async login(username: string, password: string){
        const foundUser = this.users.find(user => user.username === username && user.password === password)
        if(foundUser?.password === password){
            return {
                token: await this.jwtservice.signAsync({sub:foundUser.id, username:foundUser.username})
            }
        } else {
            throw new UnauthorizedException()
        }
    }
}