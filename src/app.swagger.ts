import { ApiOperationOptions } from "@nestjs/swagger";

// [app.swagger.ts] app.swagger.ts
export const AppControllerHelloWorld: ApiOperationOptions = {
    summary:'Operation Hello World',
    description:'Cette operation est celle de base'
}

export const SwaggerContactController: ApiOperationOptions = {
    summary:'Contact crud',
    description:'Operation sur les contacts'
}