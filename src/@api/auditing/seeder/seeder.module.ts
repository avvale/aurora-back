import { Module } from '@nestjs/common';
import { SequelizeConfigModule } from '@aurora-ts/core';
import { SharedModule } from '@aurora/shared.module';
import { IamModule } from '@api/iam/iam.module';
import { OAuthModule } from '@api/o-auth/o-auth.module';
import { AuditingModule } from '../auditing.module';

@Module({
    imports: [
        SharedModule,
        SequelizeConfigModule,
        IamModule,
        OAuthModule,
        AuditingModule,
    ],
})
export class SeederModule {}