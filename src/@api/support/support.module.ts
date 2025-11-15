import {
    SupportHandlers,
    SupportModels,
    SupportRepositories,
    SupportSagas,
    SupportServices,
} from '@app/support';
import { SharedModule } from '@aurora/shared.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {
    SupportIssueApiControllers,
    SupportIssueApiHandlers,
    SupportIssueApiResolvers,
    SupportIssueApiServices,
} from './issue';
import { ClickUpService, SupportConfigService } from './shared';
import { SupportSeeder } from './support.seeder';
import { SupportConfigApiControllers, SupportConfigApiResolvers, SupportConfigApiHandlers, SupportConfigApiServices } from './config';

@Module({
    imports: [SharedModule, SequelizeModule.forFeature([...SupportModels])],
    controllers: [...SupportIssueApiControllers,
        ...SupportConfigApiControllers
    ],
    providers: [
        /* #region customizations */
        ClickUpService,
        SupportConfigService,
        /* #endregion customizations */

        SupportSeeder,
        ...SupportHandlers,
        ...SupportServices,
        ...SupportRepositories,
        ...SupportSagas,
        ...SupportIssueApiResolvers,
        ...SupportIssueApiHandlers,
        ...SupportIssueApiServices,
        ...SupportConfigApiResolvers,
        ...SupportConfigApiHandlers,
        ...SupportConfigApiServices
    ],
})
export class SupportModule {}
