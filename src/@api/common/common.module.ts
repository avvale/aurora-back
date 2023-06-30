import { CommonHandlers, CommonModels, CommonRepositories, CommonSagas, CommonServices } from '@app/common';
import { SharedModule } from '@aurora/shared.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommonSeeder } from './common.seeder';
import { CommonCountryApiHandlers, CommonCountryControllers, CommonCountryResolvers, CommonCountryServices } from './country';
import { CommonLangApiHandlers, CommonLangControllers, CommonLangResolvers, CommonLangServices } from './lang';
import { CommonAdministrativeAreaLevel1Controllers, CommonAdministrativeAreaLevel1Resolvers, CommonAdministrativeAreaLevel1ApiHandlers, CommonAdministrativeAreaLevel1Services } from './administrative-area-level-1';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
            ...CommonModels
        ])
    ],
    controllers: [
        ...CommonLangControllers,
        ...CommonCountryControllers,
        ...CommonAdministrativeAreaLevel1Controllers
    ],
    providers: [
        CommonSeeder,
        ...CommonHandlers,
        ...CommonServices,
        ...CommonRepositories,
        ...CommonSagas,
        ...CommonLangResolvers,
        ...CommonLangApiHandlers,
        ...CommonLangServices,
        ...CommonCountryResolvers,
        ...CommonCountryApiHandlers,
        ...CommonCountryServices,
        ...CommonAdministrativeAreaLevel1Resolvers,
        ...CommonAdministrativeAreaLevel1ApiHandlers,
        ...CommonAdministrativeAreaLevel1Services
    ],
})
export class CommonModule {}
