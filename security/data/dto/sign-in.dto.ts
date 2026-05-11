import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length, MinLength, minLength } from "class-validator";
import { DtoOptionMessage } from "home";

export class SignInDto {

    @IsString({message: DtoOptionMessage.String})
    @IsNotEmpty({ message: DtoOptionMessage.NotEmpty })
    @Length(4,12,{message: DtoOptionMessage.LoginLenght})
    @ApiProperty({
        example: 'bill',
        description: 'login de utilisateur',
        required:true
    })
    username: string;



    @IsString({ message: DtoOptionMessage.String})
    @IsNotEmpty({message: DtoOptionMessage.NotEmpty})
    @Length(8,26,{message: DtoOptionMessage.PassLenght})
    @ApiProperty({
        example: '*********',
        description: 'Mot de passe de utilisateur',
        required:true
    })
    password: string;
}