import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { SupportSeeder } from './support.seeder';
import { SupportModels, SupportHandlers, SupportServices, SupportRepositories, SupportSagas } from '@app/support';
import { SupportIssueApiControllers, SupportIssueApiResolvers, SupportIssueApiHandlers, SupportIssueApiServices } from './issue';
import { ClickUpService } from './shared';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
            ...SupportModels,
        ]),
    ],
    controllers: [
        ...SupportIssueApiControllers,
    ],
    providers: [
        SupportSeeder,
        ...SupportHandlers,
        ...SupportServices,
        ...SupportRepositories,
        ...SupportSagas,
        ...SupportIssueApiResolvers,
        ...SupportIssueApiHandlers,
        ...SupportIssueApiServices,

        // ---- customizations ----
        ClickUpService,
    ],
})
export class SupportModule {}
