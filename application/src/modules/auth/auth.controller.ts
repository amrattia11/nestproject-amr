import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthenticationService } from './auth.service';
import { SignupBodyDto } from 'src/dto/signup.dto';
import tr from 'zod/v4/locales/tr.js';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService:AuthenticationService) {}

  @Post('signup')
  signup(
  
    @Body(new ValidationPipe({
      stopAtFirstError:true ,
       whitelist:true , 
       forbidNonWhitelisted:true,
      //  dismissDefaultMessages:true,
      //  disableErrorMessages:true,
     // skipUndefinedProperties:true,
     //skipNullProperties:true,
     //skipMissingProperties:true


      })) body : SignupBodyDto) : {
  
        

        message:string ,
   data:{userId:number}} 
  
  {
  const id : number = this.authenticationService.signup(body)
    return {message:'Done' ,data :{userId:id}};
  }
  //@HttpCode(HttpStatus.OK)
  @Post('login')
  login() {
    return 'Login page';
  }
}
