import { getRequestFromExecutionContext } from '@aurora-ts/core';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AzureADGuard extends AuthGuard('azure-ad')
{
    // override the getRequest() method for return request from graphql or rest api,
    // graphql wrap request in context object
    getRequest(context: ExecutionContext): Request
    {
        return getRequestFromExecutionContext(context);
    }
}