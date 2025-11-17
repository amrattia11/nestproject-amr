import {  IsEmail, IsNotEmpty, IsString, IsStrongPassword, Length, MinLength, ValidateIf } from "class-validator";
import { IsMatch } from "src/commen";

export class SignupBodyDto {
   
    @Length(2, 52,{
    message:'username min length is 2 char and max lenth is 52 char'
   })
  @IsNotEmpty()
   @IsString()
   

   username: string;
    
    @IsEmail()
    email:string;
    
    @IsStrongPassword()
    password:string;



    @ValidateIf((data:SignupBodyDto)=>{
        return Boolean(data.password)
    })

    @IsMatch<string>(['passwod'],{})
    confirmPassword: string
}

export class SignupQuaryDto{
    @MinLength(2)
    @IsString()
    flag:string
} 