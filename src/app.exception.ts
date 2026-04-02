// [app.exception.ts] app.exception.ts
import { ApiCodeResponse,ApiException } from "@common/api";

export class TestException extends ApiException {
    constructor(){
        super(ApiCodeResponse.Test,200);
    }
}