import { ApiProperty } from "@nestjs/swagger";

export class SignInPayload{

    @ApiProperty({example:'username'})
    username:string;

    @ApiProperty({
        example:'password'
    })
    password:string;
}