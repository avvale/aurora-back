import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CoreModule } from './@aurora/core.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditingModule } from '@api/auditing/auditing.module';
import { OAuthModule } from '@api/o-auth/o-auth.module';
import { IamModule } from '@api/iam/iam.module';

@Module({
    imports: [
        CoreModule,
        ScheduleModule.forRoot(),
        OAuthModule,
        IamModule,
        AuditingModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}
