import { Module } from '@nestjs/common';
import { OAuthCreatedCredentialEventHandler } from './subscribers/o-auth-created-credential.event-handler';

@Module({
    imports    : [],
    controllers: [],
    providers  : [
        OAuthCreatedCredentialEventHandler,
    ],
})
export class SharedModule {}
