import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { SignInDto } from "./sign-in.dto";
import { DtoOptionMessage } from "@common/index";
import { ApiProperty } from "@nestjs/swagger";

export class SignUpDto extends SignInDto{

    @IsEmail({blacklisted_chars:DtoOptionMessage.Blacklist},
             { message:DtoOptionMessage.Invalide}
            )
    @IsNotEmpty({message:DtoOptionMessage.NotEmpty})
    @ApiProperty({
        example:'bobi@hotmail.be',
        description :'email de utilisateur',
        required:true
    })
    email : string;

    @IsString({message:DtoOptionMessage.String})
    @ApiProperty({
        example:`descrition de l'utilisateur ...`,
        description :'descrition de utilisateur',
        required:false
    })
    description : string;
}