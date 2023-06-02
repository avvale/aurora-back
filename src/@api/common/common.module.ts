import { CommonHandlers, CommonModels, CommonRepositories, CommonSagas, CommonServices } from '@app/common';
import { GetLangsQuery } from '@app/common/lang/application/get/get-langs.query';
import { SharedModule } from '@aurora/shared.module';
import { IQueryBus } from '@aurorajs.dev/core';
import { CACHE_MANAGER, Inject, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cache } from 'cache-manager';
import { CommonSeeder } from './common.seeder';
import { CommonLangApiHandlers, CommonLangControllers, CommonLangResolvers, CommonLangServices } from './lang';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
            ...CommonModels
        ])
    ],
    controllers: [
        ...CommonLangControllers,
    ],
    providers: [
        CommonSeeder,
        ...CommonHandlers,
        ...CommonServices,
        ...CommonRepositories,
        ...CommonSagas,
        ...CommonLangResolvers,
        ...CommonLangApiHandlers,
        ...CommonLangServices
    ],
})
export class CommonModule
{
    constructor(
        private readonly queryBus: IQueryBus,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}

    async onApplicationBootstrap(): Promise<void>
    {
        // set lang in cache manager fo two years
        await this.cacheManager
            .set(
                'common/langs',
                await this.queryBus.ask(new GetLangsQuery()),
                60 * 60 * 24 * 365 * 2, // ttl
            );
    }
}
